from django.dispatch import receiver
from django.core.signals import post_save

from .models import BloodGlucoseEvent, ExerciseEvent, FoodEvent


@receiver(post_save, sender=BloodGlucoseEvent)
@receiver(post_save, sender=ExerciseEvent)
@receiver(post_save, sender=FoodEvent)
def calculate_insulin_ratio(sender, instance, **kwargs):
    user_profile = instance.user_profile
    blood_glucose = user_profile.bloodglucoseevent_set.all()
    exercise = user_profile.exerciseevent_set.all()
    food = user_profile.foodevent_set.all()

    newval = 0

    user_profile.insulin_to_carb_ratio = newval
    user_profile.save()

