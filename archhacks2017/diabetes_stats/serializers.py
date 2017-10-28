from rest_framework import serializers

from .models import BloodGlucoseEvent, ExerciseEvent, FoodEvent


class BloodGlucoseEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = BloodGlucoseEvent
        fields = ('user_profile', 'time', 'value')


class ExerciseEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExerciseEvent
        fields = ('user_profile', 'time', 'type', 'duration')


class FoodEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodEvent
        fields = ('user_profile', 'time', 'name', 'carb_count', 'insulin_count')