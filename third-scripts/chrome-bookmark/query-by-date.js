javascript:(function(){const url=location.href;if(/mozilla\.org/.test(url)){location.href=url.replace(/en-US/,'zh-CN')}if(/google\.com/.test(url)){const y=Number(window.prompt('Google Search Result Filter By Year','5'));const s=new URLSearchParams(location.search);s.set('as_qdr',`y${y}`);location.search=s.toString()}})()

