# Generated by Django 5.1.3 on 2024-11-20 17:24

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('numeroCedula', models.IntegerField()),
                ('nombres', models.CharField(max_length=50)),
                ('apellidos', models.CharField(max_length=50)),
                ('telefono', models.IntegerField()),
                ('correo', models.EmailField(max_length=30)),
                ('direccion', models.CharField(max_length=20)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Empleado',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('numeroCedula', models.IntegerField()),
                ('nombres', models.CharField(max_length=50)),
                ('apellidos', models.CharField(max_length=50)),
                ('cargo', models.CharField(max_length=30)),
                ('fecha', models.DateField()),
                ('salario', models.IntegerField()),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Menu',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombrePlato', models.CharField(max_length=20)),
                ('descripcion', models.TextField()),
                ('precio', models.IntegerField()),
                ('categoria', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Mesa',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('numeroMesa', models.IntegerField()),
                ('capacidad', models.IntegerField()),
                ('ubicacion', models.CharField(max_length=30)),
                ('estado', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Proveedor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('numeroCedula', models.IntegerField()),
                ('nombres', models.CharField(max_length=50)),
                ('apellidos', models.CharField(max_length=50)),
                ('direccion', models.CharField(max_length=20)),
                ('telefono', models.IntegerField()),
                ('tipoProductos', models.CharField(max_length=50)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Sanidad',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fechaInspeccion', models.DateField()),
                ('resultados', models.TextField()),
                ('comentarios', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='TipoPago',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('metodo', models.CharField(max_length=20)),
                ('descripcion', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Carrito',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('items', models.IntegerField()),
                ('cantidad', models.IntegerField()),
                ('precio', models.IntegerField()),
                ('menu', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='reserva.menu')),
            ],
        ),
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombreProducto', models.CharField(max_length=50)),
                ('descripcion', models.TextField()),
                ('cantidad', models.IntegerField()),
                ('categoria', models.CharField(max_length=30)),
                ('precio', models.IntegerField()),
                ('proveedor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='reserva.proveedor')),
            ],
        ),
        migrations.CreateModel(
            name='Venta',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateField()),
                ('hora', models.DateTimeField()),
                ('estado', models.BooleanField(default=False)),
                ('carrito', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='reserva.carrito')),
                ('tipoPago', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='reserva.tipopago')),
            ],
        ),
        migrations.CreateModel(
            name='Reserva',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cliente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='reserva.cliente')),
                ('mesa', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='reserva.mesa')),
                ('venta', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='reserva.venta')),
            ],
        ),
    ]
