from django.shortcuts import render
from menu.models import Recipe


def recipes_list(request):
    context = {"recipes": Recipe.objects.all()}
    return render(request, 'recipes_list.html', context)
