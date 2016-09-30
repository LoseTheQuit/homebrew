package com.homebrew;

import android.app.Activity;
import android.os.Bundle;
import android.view.KeyEvent;
import com.homebrew.BuildConfig;
import com.facebook.react.LifecycleState;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.shell.MainReactPackage;
import com.brentvatne.react.ReactVideoPackage;
// import com.lwansbrough.RCTCamera.RCTCameraPackage;
// import com.lwansbrough.ReactCamera.ReactCamera;
import com.lwansbrough.RCTCamera.*;

public class MainActivity extends Activity implements DefaultHardwareBackBtnHandler {
    private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        mReactRootView = new ReactRootView(this);
        mReactInstanceManager = ReactInstanceManager.builder()
                // .setUseOldBridge(true)
                .setApplication(getApplication())
                .setBundleAssetName("index.android.bundle")
                .setJSMainModuleName("index.android")
                .addPackage(new MainReactPackage())
                .addPackage(new ReactVideoPackage())
                .addPackage(new RCTCameraPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();
        mReactRootView.startReactApplication(mReactInstanceManager, "homebrew", null);
        setContentView(mReactRootView);

    }

    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }

    // @Override
    // protected void onPause() {
    //     super.onPause();
    //
    //     if (mReactInstanceManager != null) {
    //         mReactInstanceManager.onPause();
    //     }
    // }

    // @Override
    // protected void onResume() {
    //     super.onResume();
    //
    //     if (mReactInstanceManager != null) {
    //         mReactInstanceManager.onResume(this, this);
    //     }
    // }


    // @Override
    // public void onBackPressed() {
    //     if (mReactInstanceManager != null) {
    //         mReactInstanceManager.onBackPressed();
    //     } else {
    //         super.onBackPressed();
    //     }
    // }

    // @Override
    // public boolean onKeyUp(int keyCode, KeyEvent event) {
    //     if (keyCode == KeyEvent.KEYCODE_MENU && mReactInstanceManager != null) {
    //         mReactInstanceManager.showDevOptionsDialog();
    //         return true;
    //     }
    //     return super.onKeyUp(keyCode, event);
    // }
}
