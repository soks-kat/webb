window.addEventListener("load", function() {
    if (window.innerWidth < 1000) {
        document.getElementById("soks").innerHTML = logos[0];
    } else {
        document.getElementById("soks").innerHTML = logos[1]
    }
}, false);

const logos = [
    "                 :                        " + a +
    "          .     t#,     G:               ." + a +
    "         ;W    ;##W.    E#,    :        ;W" + a +
    "        f#E   :#L:WE    E#t  .GE       f#E" + a +
    "      .E#f   .KG  ,#D   E#t j#K;     .E#f " + a +
    "     iWW;    EE    ;#f  E#GK#f      iWW;  " + a +
    "    L##Lffi f#.     t#i E##D.      L##Lffi" + a +
    "   tLLG##L  :#G     GK  E##Wi     tLLG##L " + a +
    "     ,W#i    ;#L   LW.  E#jL#D:     ,W#i  " + a +
    "    j#E.      t#f f#:   E#t ,K#j   j#E.   " + a +
    "  .D#j         f#D#;    E#t   jD .D#j     " + a +
    " ,WK,           G#t     j#t     ,WK,      " + a +
    " EG.             t       ,;     EG.       " + a +
    " ,                              ,         " + a,

    "                  :                                                                     " + a +
    "           .     t#,     G:               .              G:                             " + a +
    "          ;W    ;##W.    E#,    :        ;W              E#,    :                       " + a +
    "         f#E   :#L:WE    E#t  .GE       f#E              E#t  .GE           .. GEEEEEEEL" + a +
    "       .E#f   .KG  ,#D   E#t j#K;     .E#f               E#t j#K;          ;W, ,;;L#K;;." + a +
    "      iWW;    EE    ;#f  E#GK#f      iWW;                E#GK#f           j##,    t#E   " + a +
    "     L##Lffi f#.     t#i E##D.      L##Lffi  ........    E##D.           G###,    t#E   " + a +
    "    tLLG##L  :#G     GK  E##Wi     tLLG##L    GEEEEEEf.  E##Wi         :E####,    t#E   " + a +
    "      ,W#i    ;#L   LW.  E#jL#D:     ,W#i                E#jL#D:      ;W#DG##,    t#E   " + a +
    "     j#E.      t#f f#:   E#t ,K#j   j#E.                 E#t ,K#j    j###DW##,    t#E   " + a +
    "   .D#j         f#D#;    E#t   jD .D#j                   E#t   jD   G##i,,G##,    t#E   " + a +
    "  ,WK,           G#t     j#t     ,WK,                    j#t      :K#K:   L##,    t#E   " + a +
    "  EG.             t       ,;     EG.                      ,;     ;##D.    L##,     fE   " + a +
    "  ,                              ,                               ,,,      .,,       :   " + a
]

const soks = document.getElementById("soks").innerHTML;

function logoResize() {
    if (window.innerWidth < 1000) {
        document.getElementById("soks").innerHTML = logos[0];
    } else {
        document.getElementById("soks").innerHTML = logos[1]
    }
}

window.onresize = logoResize;
