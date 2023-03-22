// 저자 정보
$(function () {
  $('.writer_info_ul li').click(function () {
    $(this).addClass('on').siblings().removeClass('on');
  });
});

// 문의자 정보
$(function () {
	$('.enquirer_info_ul li').click(function () {
	  $(this).addClass('on').siblings().removeClass('on');
	});
  });

// 파일 첨부 이름 변경
window.onload=function(){
	target=document.getElementById('file'); // file 아이디 선언
	target.addEventListener('change',function(){ // change 함수
		
		if(target.value.length){ // 파일 첨부인 상태일경우 파일명 출력
			$('.btn-upload').html(target.files[0].name);
		}else{ //버튼 클릭후 취소(파일 첨부 없을 경우)할때 파일명값 안보이게
			$('.btn-upload').html("");
		}
		
	});

	target2=document.getElementById('file2'); // file 아이디 선언
	target2.addEventListener('change',function(){ // change 함수
		
		if(target2.value.length){ // 파일 첨부인 상태일경우 파일명 출력
			$('.btn-upload2').html(target2.files[0].name);
		}else{ //버튼 클릭후 취소(파일 첨부 없을 경우)할때 파일명값 안보이게
			$('.btn-upload2').html("");
		}
		
	});
}