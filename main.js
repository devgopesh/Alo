var t1 = document.getElementById('t1'),
	b1 = document.getElementById('b1');
var t2 = document.getElementById('t2'),
	b2 = document.getElementById('b2');
var t3 = document.getElementById('t3'),
	b3 = document.getElementById('b3');
var t4 = document.getElementById('t4'),
	b4 = document.getElementById('b4');
var t5 = document.getElementById('t5'),
	b5 = document.getElementById('b5');
var s1 = document.querySelector('#s1');
var b6 = document.getElementById('b6');

b1.style.display = 'none';
t1.addEventListener('mouseover', function(){
	b1.style.display = 'block';
});
t1.addEventListener('mouseout', function(){
	b1.style.display = 'none';
});

b2.style.display = 'none';
t2.addEventListener('mouseover', function(){
	b2.style.display = 'block';
});
t2.addEventListener('mouseout', function(){
	b2.style.display = 'none';
});

b3.style.display = 'none';
t3.addEventListener('mouseover', function(){
	b3.style.display = 'block';
});
t3.addEventListener('mouseout', function(){
	b3.style.display = 'none';
});

b4.style.display = 'none';
t4.addEventListener('mouseover', function(){
	b4.style.display = 'block';
});
t4.addEventListener('mouseout', function(){
	b4.style.display = 'none';
});

b5.style.display = 'none';
t5.addEventListener('mouseover', function(){
	b5.style.display = 'block';
});
t5.addEventListener('mouseout', function(){
	b5.style.display = 'none';
});

b6.addEventListener('mouseover', function(){
	s1.textContent = 'A WEE PROJECT BY BRYAN JAMES';
});
b6.addEventListener('mouseout', function(){
	s1.textContent = 'BY BRYAN JAMES';
});