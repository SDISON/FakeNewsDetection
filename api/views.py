from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .chain import chain

class Verify(APIView):
	def post(self, request, format = None):
		chain().verify(request)
		return Response("working", status=status.HTTP_200_OK)
		
class getNonce(APIView):
	def post(self, request, format = None):
		chain().get_nonce(request)
		return Response("working", status=status.HTTP_200_OK)
		


