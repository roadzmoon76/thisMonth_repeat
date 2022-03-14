(function () {
    const $body = document.querySelector("body");
    const $table = document.createElement("table");
    const $thead = document.createElement("thead");
    const $tbody = document.createElement("tbody");
    const $trDay = document.createElement("tr");
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth());
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    const $style = document.createElement("style");
    let dateCount = 1;


    $style.innerHTML = "body {display: flex; justify-content : center; align-items: center; width: 100vw; height: 100vh;} table {border-collapse: collapse;} th {border: 1px solid black; width: 90px; height: 40px;}";
    document.head.appendChild($style);

    days.forEach(text => {
        const $thDay = document.createElement("th");
        $thDay.textContent = text;
        $trDay.appendChild($thDay);
    });

    for (let i = 0; i < Math.ceil((lastDay.getDate() + firstDay.getDay()) / 7); i++) {
        const $trDate = document.createElement("tr");
        for (let j = 0 + i * 7; j < 7 + i * 7; j++) {
            const $thDate = document.createElement("th");
            if (j >= firstDay.getDay() && dateCount <= lastDay.getDate()) {
                $thDate.textContent = `${dateCount++}`;
            }
            $trDate.appendChild($thDate);
        }
        $tbody.appendChild($trDate);
    }

    $thead.appendChild($trDay);
    $table.appendChild($thead);
    $table.appendChild($tbody);
    $body.appendChild($table);
})();