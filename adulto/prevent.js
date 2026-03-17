// prevent.js
// --- PREVENT LOGIC (100% ORIGINAL - Lógica Matemática Completa) ---

function runPrevent() {
    const h = document.querySelector('input[name="horizon"]:checked').value;
    const sex = document.getElementById('p-sex').value;
    const age = parseFloat(document.getElementById('p-age').value);
    const tc = parseFloat(document.getElementById('p-chol').value);
    const hdl = parseFloat(document.getElementById('p-hdl').value);
    const sbp = parseFloat(document.getElementById('p-sbp').value);
    const egfr = parseFloat(document.getElementById('p-egfr').value);
    const w = parseFloat(document.getElementById('p-w').value);
    const ht = parseFloat(document.getElementById('p-h').value);
    const diab = parseInt(document.getElementById('p-diab').value);
    const smk = parseInt(document.getElementById('p-smoke').value);
    const meds = parseInt(document.getElementById('p-meds').value);
    const statin = parseInt(document.getElementById('p-stat').value);

    if(!age||!tc||!sbp||!w||!ht){ alert("Preencha todos os campos obrigatórios."); return; }
    if(h==='30' && age>59){ alert("Cálculo 30 anos validado apenas até 59 anos."); return; }

    const bmi = w / ((ht/100)**2);
    // Coeficientes e transformações AHA 2023 (Base Model)
    const c_age=(age-55)/10, c_age2=c_age**2, nonhdl=(tc-hdl)*0.02586-3.5, c_hdl=(hdl*0.02586-1.3)/0.3, sbp_min=(Math.min(sbp,110)-110)/20, sbp_max=(Math.max(sbp,110)-130)/20, egfr_min=(Math.min(egfr,60)-60)/-15, egfr_max=(Math.max(egfr,60)-90)/-15, c_bmi_min=(Math.min(bmi,30)-25)/5, c_bmi_max=(Math.max(bmi,30)-30)/5;
    let l_cvd=0, l_hf=0;

    if(h==='30') {
        if(sex==='female') {
            l_cvd=-1.318827 + 0.5503079*c_age - 0.0928369*c_age2 + 0.0409794*nonhdl - 0.1663306*c_hdl - 0.1628654*sbp_min + 0.3299505*sbp_max + 0.6793894*diab + 0.3196112*smk + 0.1857101*egfr_min + 0.0553528*egfr_max + 0.2894*meds - 0.075688*statin - 0.0845505*(meds*sbp_max) + 0.1071019*(statin*nonhdl) - 0.0751438*(c_age*nonhdl) + 0.0301786*(c_age*c_hdl) - 0.0998776*(c_age*sbp_max) - 0.3206166*(c_age*diab) - 0.1607862*(c_age*smk) - 0.1450788*(c_age*egfr_min);
            l_hf=-2.205379 + 0.6254374*c_age - 0.0983038*c_age2 - 0.3919241*sbp_min + 0.3142295*sbp_max + 0.8330787*diab + 0.3438651*smk + 0.0594874*c_bmi_min + 0.2525536*c_bmi_max + 0.333921*meds - 0.1339765*(meds*sbp_max) - 0.0974299*(c_age*sbp_max) - 0.404855*(c_age*diab) - 0.1982991*(c_age*smk) - 0.0035619*(c_age*c_bmi_max) - 0.1564215*(c_age*egfr_min);
        } else {
            l_cvd=-1.148204 + 0.4627309*c_age - 0.0984281*c_age2 + 0.0836088*nonhdl - 0.1029824*c_hdl - 0.2140352*sbp_min + 0.2904325*sbp_max + 0.5331276*diab + 0.2141914*smk + 0.1155556*egfr_min + 0.0603775*egfr_max + 0.232714*meds - 0.0272112*statin - 0.0576732*(meds*sbp_max) + 0.134192*(statin*nonhdl) - 0.0511759*(c_age*nonhdl) + 0.0165865*(c_age*c_hdl) - 0.1101437*(c_age*sbp_max) - 0.2585943*(c_age*diab) - 0.1566406*(c_age*smk) - 0.1166776*(c_age*egfr_min);
            l_hf=-1.95751 + 0.5681541*c_age - 0.1048388*c_age2 - 0.4761564*sbp_min + 0.30324*sbp_max + 0.6840338*diab + 0.2656273*smk + 0.0833107*c_bmi_min + 0.26999*c_bmi_max + 0.2541805*egfr_min + 0.0638923*egfr_max + 0.2583631*meds - 0.0497731*(meds*sbp_max) - 0.1269124*(c_age*sbp_max) - 0.3273572*(c_age*diab) - 0.2043019*(c_age*smk) + 0.0068126*(c_age*c_bmi_max) - 0.1342618*(c_age*egfr_min);
        }
    } else { // 10 Anos
        if(sex==='female') {
            l_cvd=-3.307728 + 0.7939329*c_age + 0.0305239*nonhdl - 0.1606857*c_hdl - 0.2394003*sbp_min + 0.360078*sbp_max + 0.8667604*diab + 0.5360739*smk + 0.6045917*egfr_min + 0.0433769*egfr_max + 0.3151672*meds - 0.1477655*statin - 0.0663612*(meds*sbp_max) + 0.1197879*(statin*nonhdl) - 0.0819715*(c_age*nonhdl) + 0.0306769*(c_age*c_hdl) - 0.0946348*(c_age*sbp_max) - 0.27057*(c_age*diab) - 0.078715*(c_age*smk) - 0.1637806*(c_age*egfr_min);
            l_hf=-4.310409 + 0.8998235*c_age - 0.4559771*sbp_min + 0.3576505*sbp_max + 1.038346*diab + 0.583916*smk - 0.0072294*c_bmi_min + 0.2997706*c_bmi_max + 0.7451638*egfr_min + 0.0557087*egfr_max + 0.3534442*meds - 0.0981511*(meds*sbp_max) - 0.0946663*(c_age*sbp_max) - 0.3581041*(c_age*diab) - 0.1159453*(c_age*smk) - 0.003878*(c_age*c_bmi_max) - 0.1884289*(c_age*egfr_min);
        } else {
            l_cvd=-3.031168 + 0.7688528*c_age + 0.0736174*nonhdl - 0.0954431*c_hdl - 0.4347345*sbp_min + 0.3362658*sbp_max + 0.7692857*diab + 0.4386871*smk + 0.5378979*egfr_min + 0.0164827*egfr_max + 0.288879*meds - 0.1337349*statin - 0.0475924*(meds*sbp_max) + 0.150273*(statin*nonhdl) - 0.0517874*(c_age*nonhdl) + 0.0191169*(c_age*c_hdl) - 0.1049477*(c_age*sbp_max) - 0.2251948*(c_age*diab) - 0.0895067*(c_age*smk) - 0.1543702*(c_age*egfr_min);
            l_hf=-3.946391 + 0.8972642*c_age - 0.6811466*sbp_min + 0.3634461*sbp_max + 0.923776*diab + 0.5023736*smk - 0.0485841*c_bmi_min + 0.3726929*c_bmi_max + 0.6926917*egfr_min + 0.0251827*egfr_max + 0.2980922*meds - 0.0497731*(meds*sbp_max) - 0.1289201*(c_age*sbp_max) - 0.3040924*(c_age*diab) - 0.1401688*(c_age*smk) + 0.0068126*(c_age*c_bmi_max) - 0.1797778*(c_age*egfr_min);
        }
    }
    
    const r_cvd = 100 * (Math.exp(l_cvd)/(1+Math.exp(l_cvd)));
    const r_hf = 100 * (Math.exp(l_hf)/(1+Math.exp(l_hf)));
    
    document.getElementById('res-prevent').style.display = 'block';
    document.getElementById('val-cvd').innerText = r_cvd.toFixed(1) + "%";
    document.getElementById('val-hf').innerText = r_hf.toFixed(1) + "%";
    document.getElementById('val-bmi').innerText = bmi.toFixed(1);
}