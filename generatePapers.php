<?php

$json = json_decode(file_get_contents($argv[1]));
$outFolder = $argv[2];

foreach($json->papers as $i => $paper){
	$fileout = $outFolder . "/" . $paper->id . ".html";
	$data = create_paper_html(get_object_vars($paper));
	file_put_contents($fileout, $data);
}


function create_paper_html($data){
	//var_dump($data);
	$template = file_get_contents("./paper.html");
	$out = $template;
	// replace all placeholders
	foreach($data as $k => $v){
		$out = str_replace("{{" . $k . "}}", $v, $out);
	}
	//replacement conditional output
	preg_match_all("/{{\#([aA-zZ]+)}}/", $out, $matches);
	foreach($matches[1] as $k => $match){
		$value = $data[$match];
		if(trim($value) === '' || $value === NULL){
			// "Remove " . $match;
			$posInit = strpos($out, "{{#" . $match . "}}");
			$posEnd = strpos($out, "{{/" . $match . "}}");
			$first = substr($out, 0, $posInit);
			$second = substr($out, $posEnd);
			$out = $first . $second;
		} 
		$out = str_replace("{{#" . $match . "}}","", $out);
		$out = str_replace("{{/" . $match . "}}","", $out);
	}
	return $out;
}
?>
