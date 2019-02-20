function $id(id){
    return document.getElementById(id);
}

function getProduct(cate){


    // 切換tab去撈該商品種類的商品資料
    var productsBlock="";
    var xhr = new XMLHttpRequest(); // 建立xhr
		xhr.onload = function(){
            var ta = JSON.parse(xhr.responseText);
			if(xhr.responseText == "null"){ //失敗狀態
				console.log("沒有資料");

			}else{
				var productsArr = JSON.parse(xhr.responseText);
                var productsInfo = productsArr.productssInfo; 
                var infoArr=[];
				//[proNo||類別||名稱||價格||MJ值||圖檔名||上架值 , ..... , ......]

				// var datalength = productsArr.length;
				
                for(var i = 0;i<productsInfo.length;i++){ // i:朋友數量
                    for(var j = 0;j<7;j++){ // j:撈回的資料欄位數量
                        infoArr[i] = productsInfo[i].split("||",7); 
                        //infoArr[i]:商品資料陣列;
                        //infoArr[i][0]:商品編號; infoArr[i][1]:商品類別; infoArr[i][2]:商品名稱; .....
                    }   
                

                // 塞進畫面
                // var form = document.createElement("form");
                // form


                    productsBlock += 
                        `<form action="cartAdd.php" target="nm_iframe">                         
                            <input type="hidden" name="proNo" value="${infoArr[i][0]}">
                            <input type="hidden" name="proName" value="${infoArr[i][2]}">
                            <input type="hidden" name="price" value="${infoArr[i][3]}">
                            <input type="hidden" name="img" value="${infoArr[i][5]}">
                            <input type="hidden" name="mj" value="${infoArr[i][4]}">
                            
                            <div class="productItem">
                                
                                <div class="productImg">
                                    <img class="click_wear" src="shop-images/${infoArr[i][5]}" onclick="changeClothes(${infoArr[i][0]},1)">
                                    <div class="rwd-proInfo">
                                        <h3>${infoArr[i][2]}</h3>
                                        
                                        <div class="MJ">
                                            <span>MJ+</span>
                                            <span>${infoArr[i][4]}</span>
                                        </div>
                                        
                                        <div class="cost">
                                            <img src="shop-images/coin.png">
                                            <span>${infoArr[i][3]}</span>
                                        </div>
                                        <input type="submit" value="買" class="btn_buy">

                                    </div>
                                </div>
                                <div class="productInfo">
                                    
                                    <h3>${infoArr[i][2]}</h3>
                                    
                                    <div class="MJ">
                                        <span>MJ值+</span>
                                        <span>${infoArr[i][4]}</span>
                                    </div>
                                    
                                    <div class="cost">
                                        <img src="shop-images/coin.png"><span>${infoArr[i][3]}</span>
                                    </div>
                                    
                                    <input type="submit" class="btn_addToCart" value="">
                                        
                                    
                                    
                                </div>
                                
                                
                            </div>
                            <iframe class="id_iframe" name="nm_iframe"></iframe>
                        </form>`;

                }
                $id("productsSection").innerHTML = productsBlock;
            }
        };
        
		xhr.open("Post","getProducts.php",true);
		xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhr.send("cate="+ cate );
        

        
    if(cate =='1'){
        $id("hatTab").classList.add("onclick");
        $id("clothesTab").classList.remove("onclick");
        // alert(0);
    }else{
        $id("hatTab").classList.remove("onclick");
        $id("clothesTab").classList.add("onclick");

    }
    
}

