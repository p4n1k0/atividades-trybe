import pytest


@pytest.fixture(scope="module")
def my_list():
    return [1, 2, 3]
