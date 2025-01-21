from django.urls import path
from menu.views import recipes_list


urlpatterns = [
    path('', recipes_list, name='recipes-list'),
]
