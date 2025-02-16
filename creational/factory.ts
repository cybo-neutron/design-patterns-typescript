interface Button {
  click: () => void;
}

class IOSButton implements Button {
  click() {
    console.log(`Clicked an IOS button`);
  }
}

class AndroidButton implements Button {
  click() {
    console.log(`Clicked an Android button`);
  }
}

enum Platform {
  ANDROID,
  IOS,
}

const os = Platform.ANDROID;
/* ----- NORMAL INSTANTIATION ----- */
const button1 = os === Platform.ANDROID ? new AndroidButton() : new IOSButton()
button1.click()




/* --------- With Factory -------- */
class ButtonFactory {
  createButton(platform: Platform): Button | null {
    switch (platform) {
      case Platform.ANDROID:
        return new AndroidButton();
      case Platform.IOS:
        return new IOSButton();
      default:
        return null;
    }
  }
}

const factory = new ButtonFactory();

const buttonA = factory.createButton(os)
buttonA?.click()

