import numpy as np
from django.dispatch import receiver
from django.core.signals import post_save

from .models import BloodGlucoseEvent, ExerciseEvent, FoodEvent


@receiver(post_save, sender=BloodGlucoseEvent)
@receiver(post_save, sender=ExerciseEvent)
@receiver(post_save, sender=FoodEvent)
def calculate_insulin_ratio(sender, instance, **kwargs):
    user_profile = instance.user_profile
    foods = user_profile.foodevent_set.all()

    insulin_data=[]
    carb_data=[]
    weight=[]
    for food in foods:
        insulin_data.append(food.insulin_count)
        carb_data.append(food.carb_count)
        weight.append(food.time)

    ratios = [insulin/carb for insulin,carb in zip(insulin_data, carb_data)]

    avg = np.average(ratios, axis=1, weights=weight)

    user_profile.insulin_to_carb_ratio = avg
    user_profile.save()

