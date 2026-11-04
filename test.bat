echo "==============================="
echo "Lancement des tests unitaires"
echo "==============================="

echo "==============================="
echo "Lancement des tests unitaires"
echo "==============================="
# call npm run test:once
npm run test:once

# if %ERRORLEVEL% NEQ 0 (
# 	echo "[Erreur] les tests ont échoué"
# 	exit /b 1
# ) 

# echo "==============================="
# echo "Lancement du build"
# echo "==============================="

# call npm run build