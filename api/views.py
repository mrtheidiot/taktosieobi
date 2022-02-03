from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import JaimojepsySerializer, GalImgSerializer, TreningSerializer, KontaktSerializer, WydarzenieSerializer, TrainingEventSerializer, TrainingTitlesSerializer
from .models import JaIMojePsy, GalImg, Trening, Kontakt, Wydarzenie, TrainingEvent



@api_view(['GET'])
def getJaimojepsy(request):
    object = JaIMojePsy.objects.get(id=1)
    serializer = JaimojepsySerializer(object, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getGalImgs(request):
    objects = GalImg.objects.all()
    serializer = GalImgSerializer(objects, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getTrening(request):
    objects = Trening.objects.all()
    serializer = TreningSerializer(objects, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getKontakt(request):
    objects = Kontakt.objects.get(id=1)
    serializer = KontaktSerializer(objects, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getWydarzenie(request):
    objects = Wydarzenie.objects.all()
    serializer = WydarzenieSerializer(objects, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getTrainingEvents(request):
    objects = TrainingEvent.objects.all()
    serializer = TrainingEventSerializer(objects, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getTrainingTitles(request):
    objects = Trening.objects.all()
    serializer = TrainingTitlesSerializer(objects, many=True)
    return Response(serializer.data)