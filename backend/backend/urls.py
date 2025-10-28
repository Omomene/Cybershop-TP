from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse


urlpatterns = [
    path('', lambda request: HttpResponse("Welcome to CyberShop API")),
    path('admin/', admin.site.urls),
    path('api/products/', include('products.urls')),
]
