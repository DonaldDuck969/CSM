const names = [
    "ACHUTHA HARIKA", "AKSHADAA KALYANKAR", "AKSHITH REDDY PULLAGURLA",
    "ALIDE SAISIRI", "ALLADA SAI ANOOP", "AMOGH REVELLI", "ANVITHA MARRI",
    "AVANEESH THODUPUNOORU", "B CHARAN TEJA GOUD", "BATTU PAVANTEJA",
    "BHUVANAGIRI BHARADWAJ", "BOLLAM VISHWAS", "BOYA VARDHAN", 
    "BUYYANI EESHA", "CK ARUNA SAI", "CHEERA SURYA TEJA",
    "CHINTAKAYALA SAI SAHASRA", "CHINTAKUNTA YASHASWINI",
    "CHINTAPATLA GAYATHRI", "CHINTAPATLA RITHWIK", "CIMARALA DHANA LAXMI",
    "DAKSH BAWGIKER", "DASI HARSHA", "DEVARASHETTY SANTHOSH KUMAR",
    "DEVAVARAPU SOWMYA KEERTHANA", "DUDALA SAMPATH KUMAR", 
    "ESPI PREM RAJ", "GOGINENI KOUSHYA SRI", "GOVIND ABHINAV",
    "GUNTI VISVESH", "ISHA A DAMANI", "K P AASHISH ROHNY",
    "KANTETI SAI SURYA", "KARNATI JASHWANTH GOUD", "KETHIRI RITHYA",
    "KODURI RISHITH", "KOLACHINA SRI CHARAN", "KOPPULA JACOB RITHVIK",
    "LADELLA SRI KAVYA", "M SHIVA RAMA REDDY", "MADIKONDA NAMDEESH",
    "MAHEK KUMARI SINGH", "MAJJARI VENKATA SANTOSH", 
    "NARLAKANTI SREEDEEKSHA", "NAVALE LOKESH", "PALLE SATWIK REDDY",
    "POLEKER SIRIMALA", "PRERNA BALACHANDRAN", "RACHALA BHUVAN REDDY",
    "RAMA KRUTHI SARVARAJU", "RAYAPNOOR ADITYA", "SADHINENI NIRVAAN",
    "SAI SOHAN SIRASILLA", "SAMA BHANU", "SANJAY VAJINEPALLY",
    "SHAIK AZAAN ALIF", "SHAIK IRFAN", "SHIVA SANTOSH SURI",
    "SORRA SRI HARSHA", "SREEHITH CHANDRA DANTALA", 
    "SUNKARI MANWITHA GOPAL", "TELUKUNTA SAI SUPREETH",
    "VANJARAPU SUMIT GOKUL", "VEERANKI LIKHITHA"
];

document.getElementById('rollNoInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        showImage();
    }
});

function showImage() {
    const rollNo = document.getElementById('rollNoInput').value;
    const imageContainer = document.getElementById('imageContainer');
    const filenameContainer = document.getElementById('filenameContainer');
    const errorMessage = document.getElementById('errorMessage');

    imageContainer.innerHTML = '';
    filenameContainer.innerHTML = '';
    errorMessage.innerHTML = '';

    if (rollNo >= 1 && rollNo <= names.length) {
        const studentName = names[rollNo - 1];
        const imgSrc = `${rollNo} - ${studentName}.jpg`;
        const img = document.createElement('img');
        img.src = imgSrc;

        img.onload = function() {
            imageContainer.appendChild(img);
            filenameContainer.innerText = `${rollNo} - ${studentName}`;
        };
        img.onerror = function() {
            errorMessage.innerText = 'Image not found. Because they are from Andhra Pradesh Board.';
        };
    } else {
        errorMessage.innerText = 'Please enter a different roll number (1-64).';
    }
}
