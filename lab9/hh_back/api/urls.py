from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CompanyViewSet, VacancyViewSet, company_vacancies, top_ten_vacancies

router = DefaultRouter()
router.register(r'companies', CompanyViewSet)
router.register(r'vacancies', VacancyViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('top_ten/', top_ten_vacancies),
    path('companies/<int:id>/vacancies/', company_vacancies),
]
