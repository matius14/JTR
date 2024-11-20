from django.urls import path, include
from rest_framework import routers
from reserva import views


router = routers.DefaultRouter()
router.register(r'cliente', views.ClienteView, 'cliente')
router.register(r'producto', views.ProductoView, 'producto')
router.register(r'proveedor', views.ProveedorView, 'proveedor')
router.register(r'menu', views.MenuView, 'menu')
router.register(r'carrito', views.CarritoView, 'carrito')
router.register(r'tipoPago', views.TipoPagoView, 'tipoPago')
router.register(r'venta', views.VentaView, 'venta')
router.register(r'mensa', views.MesaView, 'mesa')
router.register(r'reserva', views.ReservaView, 'reserva')
router.register(r'sanidad', views.SanidadView, 'sanidad')


urlpatterns =[
    path("", include(router.urls)),
]