"""Remove backgrounds from team member posters and save transparent PNGs."""

from __future__ import annotations

import re
from pathlib import Path

from PIL import Image
from rembg import new_session, remove

ASSETS = Path(
    r"C:\Users\Roshin R G\.cursor\projects\d-TVK-Team-Vikram\assets"
)
OUT = Path(__file__).resolve().parents[1] / "public" / "images" / "team"
SESSION = new_session("u2net")

MEMBERS: list[tuple[str, str]] = [
    ("simran-yadav", "empty-window_images_26-bc7b2ff5-a979-45ad-b66e-85048a66db55.png"),
    ("vijay-ragavander-b", "empty-window_images_25-bb445045-5b2e-4350-802b-91b670ae63cf.png"),
    ("sanjay-c", "empty-window_images_1-353874ba-1c83-46f6-8018-e16f230f30b4.png"),
    ("manjari-v", "empty-window_images_11-55ff6fd2-032a-4915-991a-3a07787fa433.png"),
    ("manick-manoj", "empty-window_images_13-ef72bf2e-ec21-4a63-814f-7d8097243ca5.png"),
    ("kiruthika-km", "empty-window_images_14-0ab31a17-f0c7-4ae2-a3e1-3386c17d6f28.png"),
    ("sanjay-kanth", "empty-window_images_15-93bc9089-a700-420e-97f2-ebe988f90ebd.png"),
    ("subash-s", "empty-window_images_2-eb0801a2-524d-43d5-a2a3-f4e54aecf87c.png"),
    ("aruneshwar-r", "empty-window_images_12-52a645f1-f9a4-4aaa-946e-09fd4278d30a.png"),
    ("johann-s", "empty-window_images_10-18f94edd-d291-4b75-afbb-c94201410075.png"),
    ("sakthivel-r", "empty-window_images_3-206cb923-cfba-40dc-a12a-11e3d6f7d8cf.png"),
    ("mohith-o", "empty-window_images_4-b3a4599a-1a17-4d80-993f-57b5b517afff.png"),
    ("janani-d", "empty-window_images_5-bdf51788-fabb-4319-9f92-f8ab5624e537.png"),
    ("pranesh-g", "empty-window_images_8-a6ea0b84-03b4-4b64-af51-35a203b0953a.png"),
    ("venkat-pv", "empty-window_images_9-b09f0b01-de16-4bf1-9140-1903edfefd7f.png"),
    ("ahamed-faisal", "empty-window_images_16-194ba8c0-74ce-4ee7-8ab8-f1e33361be13.png"),
    ("nithin-krishna-r", "empty-window_images_19-a70e9496-e018-4677-bd41-bab72f88c842.png"),
    ("ashwinkumaar-t", "empty-window_images_20-f37d9b14-12b1-46e2-9e3a-910536dc9aa2.png"),
    ("sharmila-k", "empty-window_images_21-be457e9f-e483-4389-ac72-8b5a132f7c2e.png"),
    ("boomika-mbg", "empty-window_images_22-98e9d7a0-d465-4276-a8c3-8ee98a2e929e.png"),
    ("roshin-r-g", "empty-window_images_23-89bec967-6691-44f7-a066-2386f9f1a410.png"),
    ("tejasri-nanda-kishore", "empty-window_images_24-b207fb4b-1289-4ca6-81b9-240ee2d1ee1e.png"),
    ("saktheeshwar-t", "empty-window_images_17-a72e48bd-7af4-4111-9e05-aac9f18c0c8f.png"),
    ("vishal-khanna", "empty-window_images_18-5371380b-39e4-4772-9a8a-3225d50b6c7d.png"),
    ("shruthi-a", "empty-window_images_6-59c1780e-fb7f-4a9d-868c-4f6cf5f0b101.png"),
    ("keerthani-s", "empty-window_images_7-d889218f-4d4a-4e94-ac45-6659edcd797f.png"),
]


def find_asset(suffix: str) -> Path:
    matches = list(ASSETS.glob(f"*{suffix}"))
    if not matches:
        raise FileNotFoundError(f"Missing asset for {suffix}")
    return matches[0]


def trim_transparent(img: Image.Image) -> Image.Image:
    bbox = img.getbbox()
    if not bbox:
        return img
    return img.crop(bbox)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)

    for slug, suffix in MEMBERS:
        src = find_asset(suffix)
        print(f"Processing {slug} <- {src.name}")

        with open(src, "rb") as f:
            raw = f.read()

        result = remove(raw, session=SESSION)
        img = Image.open(__import__("io").BytesIO(result)).convert("RGBA")
        img = trim_transparent(img)

        # Scale down for web while keeping quality
        max_h = 900
        if img.height > max_h:
            ratio = max_h / img.height
            img = img.resize(
                (int(img.width * ratio), max_h), Image.Resampling.LANCZOS
            )

        out_path = OUT / f"{slug}.png"
        img.save(out_path, optimize=True)
        print(f"  -> {out_path.name} ({img.width}x{img.height})")


if __name__ == "__main__":
    main()
