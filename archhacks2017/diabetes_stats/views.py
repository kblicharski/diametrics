from rest_framework import viewsets

from .models import BloodGlucoseEvent, ExerciseEvent, FoodEvent
from .serializers import BloodGlucoseEventSerializer


class BloodGlucoseEventViewSet(viewsets.ModelViewSet):
    queryset = BloodGlucoseEvent.objects.all()
    serializer_class = BloodGlucoseEventSerializer


class ExerciseEventViewSet(viewsets.ModelViewSet):
    queryset = ExerciseEvent.objects.all()
    serializer_class = BloodGlucoseEventSerializer


class FoodEventViewSet(viewsets.ModelViewSet):
    queryset = FoodEvent.objects.all()
    serializer_class = BloodGlucoseEventSerializer
