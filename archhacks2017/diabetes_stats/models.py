from datetime import timedelta

from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone


class UserProfile(models.Model):
    username = models.CharField(max_length=50)
    # ratio is 1:insulin_to_carb_ratio
    insulin_to_carb_ratio = models.IntegerField()
    # ratio is 1:correction_factor
    correction_factor = models.IntegerField()

    def __str__(self):
        return self.username

    def number_of_points_logged(self):
        blood = BloodGlucoseEvent.objects.all().count()
        exercise = ExerciseEvent.objects.all().count()
        food = FoodEvent.objects.all().count()
        return blood + exercise + food

    def week_average_glucose(self):
        starttime = timezone.now() - timedelta(days=7)
        endtime = timezone.now()
        blood = BloodGlucoseEvent.objects.filter(time__range=[starttime, endtime]).all()
        sum = 0
        for b in blood:
            sum += b.value
        return sum/blood.count()


class BloodGlucoseEvent(models.Model):
    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    time = models.DateTimeField(auto_now_add=True)
    value = models.DecimalField(decimal_places=1, max_digits=6)

    def __str__(self):
        return self.user_profile.user.username + " at " + str(self.time)


class ExerciseEvent(models.Model):
    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    time = models.DateTimeField(auto_now_add=True)
    type = models.CharField(max_length=200)
    duration = models.DurationField()

    def __str__(self):
        return self.user_profile.user.username + " at " + str(self.time)


class FoodEvent(models.Model):
    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    time = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=250)
    carb_count = models.DecimalField(decimal_places=1, max_digits=6)
    insulin_count = models.DecimalField(decimal_places=1, max_digits=6)

    def __str__(self):
        return self.user_profile.user.username + " at " + str(self.time)

