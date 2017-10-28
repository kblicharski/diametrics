from django.contrib.auth.models import User
from django.db import models


class BloodGlucoseEvent(models.Model):
    user_profile = models.OneToOneField(UserProfile, on_delete=models.CASCADE)
    time = models.DateTimeField(auto_now_add=True)
    value = models.DecimalField(decimal_places=1, max_digits=6)


class ExerciseEvent(models.Model):
    user_profile = models.OneToOneField(UserProfile, on_delete=models.CASCADE)
    time = models.DateTimeField(auto_now_add=True)
    type = models.CharField(max_length=200)
    duration = models.DurationField()


class FoodEvent(models.Model):
    user_profile = models.OneToOneField(UserProfile, on_delete=models.CASCADE)
    time = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=250)
    carb_count = models.DecimalField(decimal_places=1, max_digits=6)
    insulin_count = models.DecimalField(decimal_places=1, max_digits=6)


class UserProfile(models.Model):
    user = models.OneToOneField(User)
    # ratio is 1:insulin_to_carb_ratio
    insulin_to_carb_ratio = models.IntegerField()
    # ratio is 1:correction_factor
    correction_factor = models.IntegerField()

