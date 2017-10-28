from django.contrib import admin

from .models import BloodGlucoseEvent, ExerciseEvent, FoodEvent, UserProfile

admin.site.register(BloodGlucoseEvent)
admin.site.register(ExerciseEvent)
admin.site.register(FoodEvent)
admin.site.register(UserProfile)