from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter

from . import views


router = DefaultRouter()
router.register(r'userprofiles', views.UserProfileViewSet)
router.register(r'bloodglucoseevents', views.BloodGlucoseEventViewSet)
router.register(r'exerciseevents', views.ExerciseEventViewSet)
router.register(r'foodevents', views.FoodEventViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]