function podeSubir(altura, acompanhado = false) {
    permitidoSubir = false;
    if (altura >= 1.4 && altura < 2) {
        permitidoSubir = true;
        console.log('Acesso autorizado');
        return permitidoSubir;
    }
    else if (altura < 1.4 && altura >= 1.2 && acompanhado === true) {
        permitidoSubir = true;
        console.log('Acesso autorizado somente com acompanhante');
        return permitidoSubir;
    }
    else {
        console.log('Acesso negado')
        return permitidoSubir;
    }
}

podeSubir(1.7);
podeSubir(1.4);
podeSubir(1.3, false);
podeSubir(1.2, true);
podeSubir(1, true);
podeSubir(1.25);