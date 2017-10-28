from rest_framework import viewsets

from .models import BloodGlucoseEvent
from .serializers import BloodGlucoseEventSerializer


class BloodGlucoseEventViewSet(viewsets.ViewSet):
