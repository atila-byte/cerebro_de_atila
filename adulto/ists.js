// --- RASTREAMENTO & IST ---
        function runScreening() {
            const sex = document.getElementById('s-sex').value;
            const age = parseFloat(document.getElementById('s-age').value);
            const list = document.getElementById('res-screening');
            let html = "";

            if(sex==='F' && age>=25 && age<=64) html+=card('orange','Câncer Colo de Útero','DNA-HPV (5/5 anos) ou Citopatológico (3/3 anos).');
            if(sex==='F' && age>=40 && age<=74) html+=card('orange','Câncer de Mama','Mamografia (Anual/Bienal).');
            if(sex==='M' && age>=50) html+=card('orange','Câncer de Próstata','Decisão Compartilhada PSA/Toque.');
            if(age>=50 && age<=75) html+=card('orange','Câncer Colorretal','Sangue Oculto (Anual) ou Colonoscopia.');
            if(document.getElementById('fr-fam-colon').checked) html+=card('red','Câncer Colorretal (Alto Risco)','Colonoscopia Precoce (Consulte especialista).');
            if(age>=35 || document.getElementById('fr-obesidade').checked) html+=card('orange','Diabetes','Glicemia Jejum/HbA1c.');
            
            // Texto HAS atualizado
            if(document.getElementById('fr-has').checked) html+=card('orange','Monitoramento HAS','Anual: Sumário de urina, Ácido Úrico, K, Cr, Microalbuminúria, Glicemia, HbA1c, Perfil Lipídico, ECG.');
            
            if(age>=20 && (document.getElementById('fr-cvd').checked || document.getElementById('fr-tabagismo').checked || document.getElementById('fr-has').checked || document.getElementById('fr-obesidade').checked)) html+=card('orange','Dislipidemia','Colesterol Total e Frações.');

            list.innerHTML = html || card('green','Tudo Certo','Manter acompanhamento de rotina.');
            list.style.display = 'block';
        }
        function card(color, title, text) { return `<div class="screening-card border-${color}"><div class="sc-header">${title}</div><div class="sc-body">${text}</div></div>`; }

        function runIST() {
            const list = document.getElementById('res-ist');
            const age = parseFloat(document.getElementById('s-age').value); 
            let html = card('orange','População Geral','HIV, Sífilis, Hep B/C (Mínimo Anual).');

            if(age && age < 30) {
                html += card('orange','< 30 Anos','Rastreio Anual Obrigatório (Surtos recentes).');
            }
            if(document.getElementById('ist-gestante').checked) {
                html += card('red','Gestante','1ª Consulta + 3º Tri + Parto: HIV, Sífilis, Hep B/C. Tratar parcerias.');
            }
            if(document.getElementById('ist-prep').checked) {
                html += card('orange','Em PrEP','Trimestral: HIV, Sífilis, Clamídia/Gonorreia (genital e extragenital).');
            }
            if(document.getElementById('ist-keypop').checked) {
                html += card('orange','População Chave','Semestral: HIV, Sífilis, Hep B/C. Clamídia/Gonorreia (genital e extragenital).');
            }
            if(document.getElementById('ist-hiv').checked) {
                html += card('orange','PVHIV','Anual: Sífilis, Hep C (se não reagente), Clamídia/Gonorreia. Hep B: monitorar imunidade.');
            }
            
            list.innerHTML = html;
            list.style.display = 'block';
        }