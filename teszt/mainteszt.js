QUnit.module('leptetes metódus tesztelése', function () {
    QUnit.test('1. létezik-e a leptetes() függvény', function (assert) {
        assert.ok(typeof leptetes === "function", "a léptetés függvény");
    });
    QUnit.test('2. leptetes(1, 2)', function (assert) {
        assert.equal(leptetes(1, 2), 3);
    });
    QUnit.test('3. leptetes(1, 0)', function (assert) {
        assert.equal(leptetes(1, 0), 1);
    });
    QUnit.test('4. leptetes(1, hossz - 1)', function (assert) {
        assert.equal(leptetes(1, lista.length - 1), 0);
    });
    QUnit.test('5. leptetes(-1, 2)', function (assert) {
        assert.equal(leptetes(-1, 2), 1);
    });
    QUnit.test('6. leptetes(-1, 0)', function (assert) {
        assert.equal(leptetes(-1, 0), lista.length - 1);
    });
    QUnit.test('7. leptetes(-1, hossz -1)', function (assert) {
        assert.equal(leptetes(-1, lista.length - 1), lista.length - 2);
    });
});

QUnit.module('osszeallit() metódus tesztelése', function () {
    QUnit.test('8. létezik-e a osszeallit() függvény', function (assert) {
        assert.ok(typeof osszeallit === "function", "a léptetés függvény");
    });
    QUnit.test('9. teljes lista', function (assert) {
        lista = [
            "kepek/alszik.jpg",
            "kepek/bocsok.jpg",
            "kepek/cirkusz.jpg",
            "kepek/eszik.jpg",
            "kepek/integet.jpg",
            "kepek/maci.jpg",
            "kepek/medve.jpg",
            "kepek/taj.jpg",
        ];
        assert.equal(osszeallit(), '<div><img src="kepek/alszik.jpg" alt=""></div><div><img src="kepek/bocsok.jpg" alt=""></div><div><img src="kepek/cirkusz.jpg" alt=""></div><div><img src="kepek/eszik.jpg" alt=""></div><div><img src="kepek/integet.jpg" alt=""></div><div><img src="kepek/maci.jpg" alt=""></div><div><img src="kepek/medve.jpg" alt=""></div><div><img src="kepek/taj.jpg" alt=""></div>');
    });
    QUnit.test('10. egy elemű lista', function (assert) {
        lista = [
            "kepek/alszik.jpg",
        ];
        assert.equal(osszeallit(), '<div><img src="kepek/alszik.jpg" alt=""></div>');
    });
});
QUnit.module('az elemek megjelennek-e az oldalon', function () {
    QUnit.test('a kisképek száma megegyezik a lisata elemeinek számával', function (assert) {
        assert.equal(document.querySelectorAll("article img").length, lista.length);
    });
    
});