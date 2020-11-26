from django.conf.urls import include,url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^home/',include('home.urls')),
    url(r'^team/',include('team.urls')),
    url(r'^register/',include('register.urls')),
    url(r'^api/',include('api.urls')),
]
