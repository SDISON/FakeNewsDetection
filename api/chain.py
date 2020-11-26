from web3 import Web3
import json

class chain:
	def __init__(self):
		self.infura_url = 'https://rinkeby.infura.io/v3/61d966b8e53a4f69900202268da29f75'
		self.localhost = 'http://127.0.0.1:8545'
		self.abi = '''[{"inputs":[{"internalType":"string[]","name":"arr","type":"string[]"},{"internalType":"address","name":"account_address","type":"address"},{"internalType":"uint8","name":"pin","type":"uint8"}],"name":"add_unrated_news","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account_address","type":"address"}],"name":"get_consumer_nonce","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account_address","type":"address"}],"name":"get_creator_nonce","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"status","type":"uint256"}],"name":"get_nonce_log","type":"event"},{"inputs":[{"internalType":"address","name":"account_address","type":"address"}],"name":"register_consumer_account","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account_address","type":"address"}],"name":"register_creator_account","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"status","type":"string"}],"name":"register_log","type":"event"},{"inputs":[{"internalType":"address","name":"account_address","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"}],"name":"set_consumer_nonce","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account_address","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"}],"name":"set_creator_nonce","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"status","type":"string"}],"name":"set_nonce_log","type":"event"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rated_news","outputs":[{"internalType":"string","name":"date","type":"string"},{"internalType":"string","name":"state","type":"string"},{"internalType":"string","name":"city","type":"string"},{"internalType":"uint8","name":"pin","type":"uint8"},{"internalType":"string","name":"content","type":"string"},{"internalType":"string","name":"created_by","type":"string"},{"internalType":"string","name":"rated_when","type":"string"},{"internalType":"uint8","name":"rating","type":"uint8"},{"internalType":"address","name":"account_address","type":"address"},{"internalType":"uint8","name":"removed","type":"uint8"},{"internalType":"uint8","name":"isRated","type":"uint8"},{"internalType":"uint8","name":"deleted","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"unrated_news","outputs":[{"internalType":"string","name":"date","type":"string"},{"internalType":"string","name":"state","type":"string"},{"internalType":"string","name":"city","type":"string"},{"internalType":"uint8","name":"pin","type":"uint8"},{"internalType":"string","name":"content","type":"string"},{"internalType":"string","name":"created_by","type":"string"},{"internalType":"string","name":"rated_when","type":"string"},{"internalType":"uint8","name":"rating","type":"uint8"},{"internalType":"address","name":"account_address","type":"address"},{"internalType":"uint8","name":"removed","type":"uint8"},{"internalType":"uint8","name":"isRated","type":"uint8"},{"internalType":"uint8","name":"deleted","type":"uint8"}],"stateMutability":"view","type":"function"}]'''
		self.contract_address = '0x20ac3a842e4B0eDC96422FCf7eAc8F42B65990b4'
		
	def verify(self, request):
		self.w3 = Web3(Web3.HTTPProvider(self.localhost))
		self.abi = json.loads(self.abi)
		self.contract = self.w3.eth.contract(address = self.contract_address, abi = self.abi)
		print(self.contract.all_functions())
		
	def get_nonce(self, request):
		self.w3 = Web3(Web3.HTTPProvider(self.localhost))
		self.abi = json.loads(self.abi)
		self.contract = self.w3.eth.contract(address = self.contract_address, abi = self.abi)
		account = request.data['account']
		account_type = request.data['type']
		
		self.contract.functions.get
