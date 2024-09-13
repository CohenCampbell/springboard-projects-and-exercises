from unittest import TestCase
from app import app

class AppTestCase(TestCase):

    def test_upper(self):
        with app.test_client() as client:
            res = client.post("/", data={"cFrom": "Usd", "cTo": "jPy", "amount": "100"})
            resp = res.get_data(as_text=True)
            
            self.assertEqual(res.status_code, 200)
            self.assertIn("JPY", resp)

    def test_same(self):
        with app.test_client() as client:
            res = client.post("/", data={"cFrom": "USD", "cTo": "USD", "amount": "100"})
            resp = res.get_data(as_text=True)
            
            self.assertEqual(res.status_code, 200)
            self.assertIn("100.0 USD", resp)

    def test_flash_from(self):
        with app.test_client() as client:
            res = client.post("/", data={"cFrom": "AAA", "cTo": "USD", "amount": "100"})
            resp = res.get_data(as_text=True)
            
            self.assertEqual(res.status_code, 200)
            self.assertIn("The currency you are converting from is not supported", resp)

    def test_flash_in(self):
        with app.test_client() as client:
            res = client.post("/", data={"cFrom": "USD", "cTo": "AAA", "amount": "100"})
            resp = res.get_data(as_text=True)
            
            self.assertEqual(res.status_code, 200)
            self.assertIn("The currency you are converting to is not supported", resp)
