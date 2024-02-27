import React, { useState } from "react";
import icons from "../../../utils/icons/icons";

interface ProfileSetting {
  primary: string;
  secondary: string;
}

const profileSettings: Record<string, ProfileSetting> = {
  red: { primary: "#FA5252", secondary: "#FFE3E3" },
  pink: { primary: "#E64980", secondary: "#FFDEEB" },
  grape: { primary: "#BE4BDB", secondary: "#F3D9FA" },
  violet: { primary: "#7950F2", secondary: "#E5DBFF" },
  indigo: { primary: "#4C6ED5", secondary: "#DBE4FF" },
  blue: { primary: "#228BE6", secondary: "#D0EBFF" },
  cyan: { primary: "#15AABF", secondary: "#C5F6FA" },
  teal: { primary: "#12B886", secondary: "#C3FAE8" },

  brand: { primary: "#208D8E", secondary: "#C2F7FA" },
  green: { primary: "#40C057", secondary: "#D3F9D8" },
  lime: { primary: "#82C91E", secondary: "#E9FAC8" },
  yellow: { primary: "#FAB005", secondary: "#FFF3BF" },
  orange: { primary: "#FD7E14", secondary: "#FFE8CC" },
};

const ProfileSettings = () => {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [selectedPrimaryColor, setSelectedPrimaryColor] = useState<string>("");
  const [selectedSecondaryColor, setSelectedSecondaryColor] =
    useState<string>("");

  const handleProfileClick = (profile: string) => {
    setSelectedProfile(profile);
    setSelectedPrimaryColor(profileSettings[profile].primary);
    setSelectedSecondaryColor(profileSettings[profile].secondary);
  };

  const handleSave = () => {
    if (selectedProfile) {
      console.log("Selected profile:", selectedProfile);
      console.log("Primary color:", selectedPrimaryColor);
      console.log("Secondary color:", selectedSecondaryColor);
      // اعمال تغییرات
    } else {
      console.log("No profile selected!");
    }
  };

  return (
    <div className="w-[354px] py-3 pr-1 flex flex-col mx-6">
      <h2 className="text-right mt-3 mb-6 font-bold" style={{ fontSize: 31 }}>
        تنظیمات
      </h2>
      <p>انتخاب تم</p>
      <div className="flex w-[430px] mb-6 mt-3">
        {Object.keys(profileSettings).map((profile) => (
          <div
            key={profile}
            className={`profile-box ${
              selectedProfile === profile ? "selected" : ""
            } ${profile}`}
            style={{ backgroundColor: profileSettings[profile].primary }}
            onClick={() => handleProfileClick(profile)}
          ></div>
        ))}
      </div>
      {icons.sun("gray", "20px")}
      <button className="p-i-b mt-6" onClick={handleSave}>
        ثبت تغییرات
      </button>
    </div>
  );
};

export default ProfileSettings;
