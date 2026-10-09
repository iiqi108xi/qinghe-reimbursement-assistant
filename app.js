// 模拟报销单数据
const ticketData = {
    "R-0001": "单号 R-0001 当前进度：审核中（目前是材料审核中，等待周敏核对）。"
};

// 模拟差旅制度数据
const policyData = {
    "差旅标准": "最新差旅制度：一线城市住宿标准为 500元/天，二线城市为 350元/天。",
    "发票要求": "报销需要提供合规抬头的增值税电子普通发票与行程单。"
};

function searchTicket() {
    const id = document.getElementById("ticketId").value.trim().toUpperCase();
    const resultDiv = document.getElementById("ticketResult");
    resultDiv.style.display = "block";
    
    if (ticketData[id]) {
        resultDiv.innerText = ticketData[id];
    } else {
        resultDiv.innerText = "未查询到该单号，请检查输入是否为 R-0001。";
    }
}

function askPolicy(type) {
    const resultDiv = document.getElementById("policyResult");
    resultDiv.style.display = "block";
    resultDiv.innerText = policyData[type] || "暂无相关制度说明。";
}
