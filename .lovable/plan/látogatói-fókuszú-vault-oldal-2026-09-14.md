# Látogatói fókuszú Vault oldal

## Cél
A jelenlegi bemutatóanyag-jellegű oldalt valódi, rejtélyes eseményoldallá alakítani úgy, hogy csak a résztvevőkre tartozó információk maradjanak láthatók.

## Változtatások
- Eltávolítom a teljes belső „The concept” és „Tone” részt.
- A Vault működésének részletes felsorolását rövid, látogatóknak szóló részvételi lehetőségekre cserélem.
- A nyomtípusok teljes listája helyett csak az aktuális publikus Ghost-üzenet és egy időzített eseményblokk marad.
- Kiveszem a 100%-nál várható fordulatot és a Final Ghost Hunt spoilert.
- A ranglistáról eltávolítom a „demo data” megjelölést, a kitalált neveket megtartom.
- Az oldal sorrendje: Vault állapot → Ghost állapot és aktuális jel → részvétel → ranglista → legutóbbi események.
- Megtartom a jelenlegi sötét, arany-vörös megjelenést és a Ghost képeket.
- A Discord gomb látványos marad; valódi meghívólink hiányában egyelőre nem vezetek be kitalált címet.

## Technikai részletek
- Csak a frontend szövegeit, szekcióit és meglévő komponenseit módosítom.
- Nem készül háttérrendszer; minden adat továbbra is demonstrációs.
- Ellenőrzöm asztali és mobil nézetben, hogy nincs átfedés vagy levágott tartalom.
