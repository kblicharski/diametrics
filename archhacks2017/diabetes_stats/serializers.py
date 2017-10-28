from rest.framework import serializers

from .models import BloodGlucoseEvent, ExerciseEvent, FoodEvent


class BloodGlucoseEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = BloodGlucoseEvent
        fields = ('user_profile', 'time', 'value')