import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { NAVER_MAP_API_KEY } from '@env';  // 환경 변수에서 API 키 가져오기

const Experiment1 = () => {
  // WebView에 주입할 자바스크립트 코드
  const injectedJavaScript = `
    window.apiKey = "${NAVER_MAP_API_KEY}";  // API 키를 HTML로 전달
    true;
  `;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'file:///android_asset/index.html' }}  // Android용 HTML 파일 경로
        injectedJavaScript={injectedJavaScript}  // HTML로 API 키 전달
        javaScriptEnabled={true}  // 자바스크립트 사용 가능하게 설정
        style={{ flex: 1 }}
        originWhitelist={['*']}  // 모든 출처 허용
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Experiment1;
