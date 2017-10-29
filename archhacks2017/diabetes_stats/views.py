from datetime import datetime, timedelta

from django.utils import timezone

from rest_framework import viewsets, renderers
from rest_framework.decorators import detail_route, list_route
from rest_framework.response import Response

from .models import BloodGlucoseEvent, ExerciseEvent, FoodEvent, UserProfile
from .serializers import BloodGlucoseEventSerializer, ExerciseEventSerializer, FoodEventSerializer, UserProfileSerializer


class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer


class BloodGlucoseEventViewSet(viewsets.ModelViewSet):
    queryset = BloodGlucoseEvent.objects.all()
    serializer_class = BloodGlucoseEventSerializer

    @list_route(methods=['get'])
    def last_24_hours(self, request):
        endtime = timezone.now()
        starttime = endtime - timedelta(days=1)
        queryset = BloodGlucoseEvent.objects.filter(time__range=[starttime, endtime])
        serializer = BloodGlucoseEventSerializer(queryset, many=True)
        return Response(serializer.data)


class ExerciseEventViewSet(viewsets.ModelViewSet):
    queryset = ExerciseEvent.objects.all()
    serializer_class = ExerciseEventSerializer

    @list_route(methods=['get'])
    def last_24_hours(self, request):
        endtime = timezone.now()
        starttime = endtime - timedelta(days=1)
        queryset = ExerciseEvent.objects.filter(time__range=[starttime, endtime])
        serializer = ExerciseEventSerializer(queryset, many=True)
        return Response(serializer.data)


class FoodEventViewSet(viewsets.ModelViewSet):
    queryset = FoodEvent.objects.all()
    serializer_class = FoodEventSerializer

    @list_route(methods=['get'])
    def last_24_hours(self, request):
        endtime = timezone.now()
        starttime = endtime - timedelta(days=1)
        queryset = FoodEvent.objects.filter(time__range=[starttime, endtime])
        serializer = FoodEventSerializer(queryset, many=True)
        return Response(serializer.data)
