package com.homebrew;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
// import com.lwansbrough.ReactCamera.ReactCamera;
// import com.lwansbrough.RCTCamera.*;
import java.util.Arrays;
import java.util.List;

// public int testInt = 182;
// public double tesstDouble = 1.82;
// public float testFloat = 18.2;

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
          new RCTCameraPackage()
          // , new RCTCameraPackage()
      );
    }
  };

  // @Override
  // public List<Class<? extends JavaScriptModule>> createJSModules() {
  //     return Collections.emptyList();
  // }
  //
  // @Override
  // public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
  //     return Arrays.asList();
  // }

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}
