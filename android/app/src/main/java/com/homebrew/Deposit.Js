package com.homebrew;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "homebrew";
    }
}

/////////
/////////
/////////
/////////
/////////
/////////

package com.homebrew;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;


import java.util.Arrays;
import java.util.List;

import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;

import com.brentvatne.react.ReactVideoPackage;
import com.lwansbrough.RCTCamera.*;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

   @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new ReactVideoPackage(),
          new RCTCameraPackage(),
          new ReactNativePushNotificationPackage(),
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}
