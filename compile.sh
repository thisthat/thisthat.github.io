#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
php generatePapers.php ${DIR}/data/papers.json ${DIR}/paper/
