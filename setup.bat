@echo off
setlocal enabledelayedexpansion

:: Vérifie si le fichier modules.txt existe
if not exist modules.txt (
    echo Error: modules.txt file not found.
    pause
    exit /b 1
)

:: Boucle pour lire chaque ligne du fichier modules.txt
for /f "tokens=*" %%i in (modules.txt) do (
    echo Installing %%i...
    npm install %%i 2>>install_errors.log
    if errorlevel 1 (
        echo Failed to install %%i. Check install_errors.log for details.
        pause
        exit /b 1
    )
    echo %%i installation complete.
)

echo All installations complete.
pause
