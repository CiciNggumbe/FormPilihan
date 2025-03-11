function generateInputs() {
    let nama = document.getElementById("nama").value.trim();
    let jumlah = parseInt(document.getElementById("jumlah").value);
    let output = document.getElementById("output");

    if (!nama || isNaN(jumlah) || jumlah < 1) {
        alert("Masukkan nama dan jumlah pilihan yang valid!");
        return;
    }

    output.innerHTML = "";
    for (let i = 1; i <= jumlah; i++) {
        output.innerHTML += `<label>Pilihan ${i}:</label> <input type='text' id='pilihan${i}'><br>`;
    }
    output.innerHTML += `<button onclick='generateSelection(${jumlah})'>OK</button>`;
}

function generateSelection(jumlah) {
    let pilihanArray = [];
    for (let i = 1; i <= jumlah; i++) {
        let pilihan = document.getElementById(`pilihan${i}`).value.trim();
        if (!pilihan) {
            alert("Isi semua pilihan!");
            return;
        }
        pilihanArray.push(pilihan);
    }

    let output = document.getElementById("output");
    output.innerHTML = `<label>Pilih:</label> <select id="finalChoice">
        ${pilihanArray.map(p => `<option value="${p}">${p}</option>`).join("")}
    </select> <button onclick='showResult(${JSON.stringify(pilihanArray)})'>OK</button>`;
}

function showResult(pilihanArray) {
    let nama = document.getElementById("nama").value;
    let jumlah = document.getElementById("jumlah").value;
    let pilihan = document.getElementById("finalChoice").value;

    document.getElementById("output").innerHTML = `
        <p>Halo, nama saya <b>${nama}</b>, saya memiliki <b>${jumlah}</b> pilihan: <b>${pilihanArray.join(", ")}</b>, dan saya memilih <b>${pilihan}</b>.</p>
    `;
}
