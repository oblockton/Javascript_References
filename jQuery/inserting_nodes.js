var family1, family2, bruce, madison, hunter;

family1 = $("#family1")

family2 = $('<div id="#family2"><h1>Family 2</h1></div>')

bruce = $('<div id="#bruce"><h2>Bruce</h2></div>')

madison = $('<div id="#madison"><h3>Madison</h2></div>')

hunter = $('<div id="#hunter"><h3>Hunter</h2></div>')

family2.insertAfter(family1);
family2.append(bruce);
bruce.append(madison);
bruce.append(hunter);

<!DOCTYPE html>
<!--



-->
<html lang="en">
<head>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <meta charset="UTF-8">
</head>
<body>
	<div>
		<div>
			<div id='family1'>
				<h1>Family1</h1>
				<div id='alex'>
					<h2>Alex</h2>
					<div id='jane'>
						<h3>Jane</h3>
					</div>
				</div>
				<div id='taylor'>
					<h2>Taylor</h2>
					<div id='bob'>
						<h3>Bob</h3>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
