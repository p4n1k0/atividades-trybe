# Sim, é só receber `capsys` como parâmetro em qualquer função de teste que o
# pytest faz o resto da magia acontecer
def test_print_to_stdout(capsys):
    print("Hello, world!")
    captured = capsys.readouterr()
    assert captured.out == "Hello, world!\n"  # print coloca \n automaticamente
