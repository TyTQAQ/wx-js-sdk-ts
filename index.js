// http://res.wx.qq.com/open/js/jweixin-1.6.3.js
!((e, n) => {
  module.exports = n(e);
})(typeof window !== "undefined" ? window : this, function (r, e) {
  var a, c, n, i, t, o, s, d, u, l, p, f, m, g, h, y, v, S, I, _, k, w, T;
  if (!r.jWeixin)
    return (
      (a = {
        config: "preVerifyJSAPI",
        onMenuShareTimeline: "menu:share:timeline",
        onMenuShareAppMessage: "menu:share:appmessage",
        onMenuShareQQ: "menu:share:qq",
        onMenuShareWeibo: "menu:share:weiboApp",
        onMenuShareQZone: "menu:share:QZone",
        previewImage: "imagePreview",
        getLocation: "geoLocation",
        openProductSpecificView: "openProductViewWithPid",
        addCard: "batchAddCard",
        openCard: "batchViewCard",
        chooseWXPay: "getBrandWCPayRequest",
        openEnterpriseRedPacket: "getRecevieBizHongBaoRequest",
        startSearchBeacons: "startMonitoringBeacons",
        stopSearchBeacons: "stopMonitoringBeacons",
        onSearchBeacons: "onBeaconsInRange",
        consumeAndShareCard: "consumedShareCard",
        openAddress: "editAddress",
      }),
      (c = (() => {
        var e,
          n = {};
        for (e in a) n[a[e]] = e;
        return n;
      })()),
      (i = (n = r.document).title),
      (t = navigator.userAgent.toLowerCase()),
      (m = navigator.platform.toLowerCase()),
      (o = !(!m.match("mac") && !m.match("win"))),
      (s = -1 != t.indexOf("wxdebugger")),
      (d = -1 != t.indexOf("micromessenger")),
      (u = -1 != t.indexOf("android")),
      (l = -1 != t.indexOf("iphone") || -1 != t.indexOf("ipad")),
      (p = -1 != t.indexOf("saaasdk")),
      (f = (m =
        t.match(/micromessenger\/(\d+\.\d+\.\d+)/) ||
        t.match(/micromessenger\/(\d+\.\d+)/))
        ? m[1]
        : ""),
      (g = {
        initStartTime: L(),
        initEndTime: 0,
        preVerifyStartTime: 0,
        preVerifyEndTime: 0,
      }),
      (h = {
        version: 1,
        appId: "",
        initTime: 0,
        preVerifyTime: 0,
        networkType: "",
        isPreVerifyOk: 1,
        systemType: l ? 1 : u ? 2 : -1,
        clientVersion: f,
        url: encodeURIComponent(location.href),
      }),
      (y = {}),
      (v = { _completes: [] }),
      (S = { state: 0, data: {} }),
      N(function () {
        g.initEndTime = L();
      }),
      (I = !1),
      (_ = []),
      (k = {
        config: function (e) {
          O("config", (y = e));
          var o = !1 !== y.check;
          (N(function () {
            if (o)
              (M(
                a.config,
                {
                  verifyJsApiList: C(y.jsApiList),
                  verifyOpenTagList: C(y.openTagList),
                },
                ((v._complete = function (e) {
                  ((g.preVerifyEndTime = L()), (S.state = 1), (S.data = e));
                }),
                (v.success = function (e) {
                  h.isPreVerifyOk = 0;
                }),
                (v.fail = function (e) {
                  v._fail ? v._fail(e) : (S.state = -1);
                }),
                (t = v._completes).push(function () {
                  B();
                }),
                (v.complete = function (e) {
                  for (var n = 0, i = t.length; n < i; ++n) t[n]();
                  v._completes = [];
                }),
                v),
              ),
                (g.preVerifyStartTime = L()));
            else {
              S.state = 1;
              for (var e = v._completes, n = 0, i = e.length; n < i; ++n)
                e[n]();
              v._completes = [];
            }
            var t;
          }),
            k.invoke ||
              ((k.invoke = function (e, n, i) {
                r.WeixinJSBridge && WeixinJSBridge.invoke(e, P(n), i);
              }),
              (k.on = function (e, n) {
                r.WeixinJSBridge && WeixinJSBridge.on(e, n);
              })));
        },
        ready: function (e) {
          (0 != S.state || (v._completes.push(e), !d && y.debug)) && e();
        },
        error: function (e) {
          f < "6.0.2" || (-1 == S.state ? e(S.data) : (v._fail = e));
        },
        checkJsApi: function (e) {
          M(
            "checkJsApi",
            { jsApiList: C(e.jsApiList) },
            ((e._complete = function (e) {
              u && (i = e.checkResult) && (e.checkResult = JSON.parse(i));
              var n,
                i = e,
                t = i.checkResult;
              for (n in t) {
                var o = c[n];
                o && ((t[o] = t[n]), delete t[n]);
              }
            }),
            e),
          );
        },
        onMenuShareTimeline: function (e) {
          V(
            a.onMenuShareTimeline,
            {
              complete: function () {
                M(
                  "shareTimeline",
                  {
                    title: e.title || i,
                    desc: e.title || i,
                    img_url: e.imgUrl || "",
                    link: e.link || location.href,
                    type: e.type || "link",
                    data_url: e.dataUrl || "",
                  },
                  e,
                );
              },
            },
            e,
          );
        },
        onMenuShareAppMessage: function (n) {
          V(
            a.onMenuShareAppMessage,
            {
              complete: function (e) {
                "favorite" === e.scene
                  ? M("sendAppMessage", {
                      title: n.title || i,
                      desc: n.desc || "",
                      link: n.link || location.href,
                      img_url: n.imgUrl || "",
                      type: n.type || "link",
                      data_url: n.dataUrl || "",
                    })
                  : M(
                      "sendAppMessage",
                      {
                        title: n.title || i,
                        desc: n.desc || "",
                        link: n.link || location.href,
                        img_url: n.imgUrl || "",
                        type: n.type || "link",
                        data_url: n.dataUrl || "",
                      },
                      n,
                    );
              },
            },
            n,
          );
        },
        onMenuShareQQ: function (e) {
          V(
            a.onMenuShareQQ,
            {
              complete: function () {
                M(
                  "shareQQ",
                  {
                    title: e.title || i,
                    desc: e.desc || "",
                    img_url: e.imgUrl || "",
                    link: e.link || location.href,
                  },
                  e,
                );
              },
            },
            e,
          );
        },
        onMenuShareWeibo: function (e) {
          V(
            a.onMenuShareWeibo,
            {
              complete: function () {
                M(
                  "shareWeiboApp",
                  {
                    title: e.title || i,
                    desc: e.desc || "",
                    img_url: e.imgUrl || "",
                    link: e.link || location.href,
                  },
                  e,
                );
              },
            },
            e,
          );
        },
        onMenuShareQZone: function (e) {
          V(
            a.onMenuShareQZone,
            {
              complete: function () {
                M(
                  "shareQZone",
                  {
                    title: e.title || i,
                    desc: e.desc || "",
                    img_url: e.imgUrl || "",
                    link: e.link || location.href,
                  },
                  e,
                );
              },
            },
            e,
          );
        },
        updateTimelineShareData: function (e) {
          M(
            "updateTimelineShareData",
            { title: e.title, link: e.link, imgUrl: e.imgUrl },
            e,
          );
        },
        updateAppMessageShareData: function (e) {
          M(
            "updateAppMessageShareData",
            { title: e.title, desc: e.desc, link: e.link, imgUrl: e.imgUrl },
            e,
          );
        },
        startRecord: function (e) {
          M("startRecord", {}, e);
        },
        stopRecord: function (e) {
          M("stopRecord", {}, e);
        },
        onVoiceRecordEnd: function (e) {
          V("onVoiceRecordEnd", e);
        },
        playVoice: function (e) {
          M("playVoice", { localId: e.localId }, e);
        },
        pauseVoice: function (e) {
          M("pauseVoice", { localId: e.localId }, e);
        },
        stopVoice: function (e) {
          M("stopVoice", { localId: e.localId }, e);
        },
        onVoicePlayEnd: function (e) {
          V("onVoicePlayEnd", e);
        },
        uploadVoice: function (e) {
          M(
            "uploadVoice",
            {
              localId: e.localId,
              isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1,
            },
            e,
          );
        },
        downloadVoice: function (e) {
          M(
            "downloadVoice",
            {
              serverId: e.serverId,
              isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1,
            },
            e,
          );
        },
        translateVoice: function (e) {
          M(
            "translateVoice",
            {
              localId: e.localId,
              isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1,
            },
            e,
          );
        },
        chooseImage: function (e) {
          M(
            "chooseImage",
            {
              scene: "1|2",
              count: e.count || 9,
              sizeType: e.sizeType || ["original", "compressed"],
              sourceType: e.sourceType || ["album", "camera"],
            },
            ((e._complete = function (e) {
              if (u) {
                var n = e.localIds;
                try {
                  n && (e.localIds = JSON.parse(n));
                } catch (e) {}
              }
            }),
            e),
          );
        },
        getLocation: function (e) {
          ((e = e || {}),
            M(
              a.getLocation,
              { type: e.type || "wgs84" },
              ((e._complete = function (e) {
                delete e.type;
              }),
              e),
            ));
        },
        previewImage: function (e) {
          M(a.previewImage, { current: e.current, urls: e.urls }, e);
        },
        uploadImage: function (e) {
          M(
            "uploadImage",
            {
              localId: e.localId,
              isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1,
            },
            e,
          );
        },
        downloadImage: function (e) {
          M(
            "downloadImage",
            {
              serverId: e.serverId,
              isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1,
            },
            e,
          );
        },
        getLocalImgData: function (e) {
          !1 === I
            ? ((I = !0),
              M(
                "getLocalImgData",
                { localId: e.localId },
                ((e._complete = function (e) {
                  var n;
                  ((I = !1),
                    0 < _.length && ((n = _.shift()), wx.getLocalImgData(n)));
                }),
                e),
              ))
            : _.push(e);
        },
        getNetworkType: function (e) {
          M(
            "getNetworkType",
            {},
            ((e._complete = function (e) {
              var n = e,
                e = n.errMsg,
                i = ((n.errMsg = "getNetworkType:ok"), n.subtype);
              if ((delete n.subtype, i)) n.networkType = i;
              else {
                var i = e.indexOf(":"),
                  t = e.substring(i + 1);
                switch (t) {
                  case "wifi":
                  case "edge":
                  case "wwan":
                    n.networkType = t;
                    break;
                  default:
                    n.errMsg = "getNetworkType:fail";
                }
              }
            }),
            e),
          );
        },
        openLocation: function (e) {
          M(
            "openLocation",
            {
              latitude: e.latitude,
              longitude: e.longitude,
              name: e.name || "",
              address: e.address || "",
              scale: e.scale || 28,
              infoUrl: e.infoUrl || "",
            },
            e,
          );
        },
        hideOptionMenu: function (e) {
          M("hideOptionMenu", {}, e);
        },
        showOptionMenu: function (e) {
          M("showOptionMenu", {}, e);
        },
        closeWindow: function (e) {
          M("closeWindow", {}, (e = e || {}));
        },
        hideMenuItems: function (e) {
          M("hideMenuItems", { menuList: e.menuList }, e);
        },
        showMenuItems: function (e) {
          M("showMenuItems", { menuList: e.menuList }, e);
        },
        hideAllNonBaseMenuItem: function (e) {
          M("hideAllNonBaseMenuItem", {}, e);
        },
        showAllNonBaseMenuItem: function (e) {
          M("showAllNonBaseMenuItem", {}, e);
        },
        scanQRCode: function (e) {
          M(
            "scanQRCode",
            {
              needResult: (e = e || {}).needResult || 0,
              scanType: e.scanType || ["qrCode", "barCode"],
            },
            ((e._complete = function (e) {
              var n;
              l &&
                (n = e.resultStr) &&
                ((n = JSON.parse(n)),
                (e.resultStr = n && n.scan_code && n.scan_code.scan_result));
            }),
            e),
          );
        },
        openAddress: function (e) {
          M(
            a.openAddress,
            {},
            ((e._complete = function (e) {
              (((e = e).postalCode = e.addressPostalCode),
                delete e.addressPostalCode,
                (e.provinceName = e.proviceFirstStageName),
                delete e.proviceFirstStageName,
                (e.cityName = e.addressCitySecondStageName),
                delete e.addressCitySecondStageName,
                (e.countryName = e.addressCountiesThirdStageName),
                delete e.addressCountiesThirdStageName,
                (e.detailInfo = e.addressDetailInfo),
                delete e.addressDetailInfo);
            }),
            e),
          );
        },
        openProductSpecificView: function (e) {
          M(
            a.openProductSpecificView,
            {
              pid: e.productId,
              view_type: e.viewType || 0,
              ext_info: e.extInfo,
            },
            e,
          );
        },
        addCard: function (e) {
          for (var n = e.cardList, i = [], t = 0, o = n.length; t < o; ++t) {
            var r = n[t],
              r = { card_id: r.cardId, card_ext: r.cardExt };
            i.push(r);
          }
          M(
            a.addCard,
            { card_list: i },
            ((e._complete = function (e) {
              if ((n = e.card_list)) {
                for (var n, i = 0, t = (n = JSON.parse(n)).length; i < t; ++i) {
                  var o = n[i];
                  ((o.cardId = o.card_id),
                    (o.cardExt = o.card_ext),
                    (o.isSuccess = !!o.is_succ),
                    delete o.card_id,
                    delete o.card_ext,
                    delete o.is_succ);
                }
                ((e.cardList = n), delete e.card_list);
              }
            }),
            e),
          );
        },
        chooseCard: function (e) {
          M(
            "chooseCard",
            {
              app_id: y.appId,
              location_id: e.shopId || "",
              sign_type: e.signType || "SHA1",
              card_id: e.cardId || "",
              card_type: e.cardType || "",
              card_sign: e.cardSign,
              time_stamp: e.timestamp + "",
              nonce_str: e.nonceStr,
            },
            ((e._complete = function (e) {
              ((e.cardList = e.choose_card_info), delete e.choose_card_info);
            }),
            e),
          );
        },
        openCard: function (e) {
          for (var n = e.cardList, i = [], t = 0, o = n.length; t < o; ++t) {
            var r = n[t],
              r = Object.assign({ card_id: r.cardId }, r);
            i.push(r);
          }
          M(a.openCard, { card_list: i }, e);
        },
        consumeAndShareCard: function (e) {
          M(
            a.consumeAndShareCard,
            { consumedCardId: e.cardId, consumedCode: e.code },
            e,
          );
        },
        chooseWXPay: function (e) {
          (M(a.chooseWXPay, x(e), e), B({ jsApiName: "chooseWXPay" }));
        },
        openEnterpriseRedPacket: function (e) {
          M(a.openEnterpriseRedPacket, x(e), e);
        },
        startSearchBeacons: function (e) {
          M(a.startSearchBeacons, { ticket: e.ticket }, e);
        },
        stopSearchBeacons: function (e) {
          M(a.stopSearchBeacons, {}, e);
        },
        onSearchBeacons: function (e) {
          V(a.onSearchBeacons, e);
        },
        openEnterpriseChat: function (e) {
          M(
            "openEnterpriseChat",
            { useridlist: e.userIds, chatname: e.groupName },
            e,
          );
        },
        launchMiniProgram: function (e) {
          M(
            "launchMiniProgram",
            {
              targetAppId: e.targetAppId,
              path: ((e) => {
                var n;
                if ("string" == typeof e && 0 < e.length)
                  return (
                    (n = e.split("?")[0]),
                    (n += ".html"),
                    void 0 !== (e = e.split("?")[1]) ? n + "?" + e : n
                  );
              })(e.path),
              envVersion: e.envVersion,
            },
            e,
          );
        },
        openBusinessView: function (e) {
          M(
            "openBusinessView",
            {
              businessType: e.businessType,
              queryString: e.queryString || "",
              envVersion: e.envVersion,
            },
            ((e._complete = function (n) {
              if (u) {
                var e = n.extraData;
                if (e)
                  try {
                    n.extraData = JSON.parse(e);
                  } catch (e) {
                    n.extraData = {};
                  }
              }
            }),
            e),
          );
        },
        miniProgram: {
          navigateBack: function (e) {
            ((e = e || {}),
              N(function () {
                M(
                  "invokeMiniProgramAPI",
                  { name: "navigateBack", arg: { delta: e.delta || 1 } },
                  e,
                );
              }));
          },
          navigateTo: function (e) {
            N(function () {
              M(
                "invokeMiniProgramAPI",
                { name: "navigateTo", arg: { url: e.url } },
                e,
              );
            });
          },
          redirectTo: function (e) {
            N(function () {
              M(
                "invokeMiniProgramAPI",
                { name: "redirectTo", arg: { url: e.url } },
                e,
              );
            });
          },
          switchTab: function (e) {
            N(function () {
              M(
                "invokeMiniProgramAPI",
                { name: "switchTab", arg: { url: e.url } },
                e,
              );
            });
          },
          reLaunch: function (e) {
            N(function () {
              M(
                "invokeMiniProgramAPI",
                { name: "reLaunch", arg: { url: e.url } },
                e,
              );
            });
          },
          postMessage: function (e) {
            N(function () {
              M(
                "invokeMiniProgramAPI",
                { name: "postMessage", arg: e.data || {} },
                e,
              );
            });
          },
          getEnv: function (e) {
            N(function () {
              e({ miniprogram: "miniprogram" === r.__wxjs_environment });
            });
          },
        },
        requestFacialVerify: function (e) {
          M(
            "requestWxFacePictureVerify",
            {
              appId: e.appId,
              request_verify_pre_info: JSON.stringify({
                verify_id: e.verifyId || "",
                version: 1,
              }),
            },
            ((e._complete = function (e) {
              e.verifyResult &&
                (delete e.verifyResult,
                (e.errCode = 0),
                (e.errMsg = "requestFacialVerify:ok"));
            }),
            e),
          );
        },
        requestFacialVerifyAndUploadVideo: function (e) {
          M(
            "requestWxFacePictureVerifyUnionVideo",
            {
              appId: e.appId,
              request_verify_pre_info: JSON.stringify({
                verify_id: e.verifyId || "",
                version: 1,
              }),
            },
            ((e._complete = function (e) {
              e.verifyResult &&
                (delete e.verifyResult,
                (e.errCode = 0),
                (e.errMsg = "requestFacialVerifyAndUploadVideo:ok"));
            }),
            e),
          );
        },
      }),
      (w = 1),
      (T = {}),
      n.addEventListener(
        "error",
        function (e) {
          var n, i, t;
          u ||
            ((t = (n = e.target).tagName),
            (i = n.src),
            "IMG" != t && "VIDEO" != t && "AUDIO" != t && "SOURCE" != t) ||
            (-1 != i.indexOf("wxlocalresource://") &&
              (e.preventDefault(),
              e.stopPropagation(),
              (t = n["wx-id"]) || ((t = w++), (n["wx-id"] = t)),
              T[t] ||
                ((T[t] = !0),
                wx.ready(function () {
                  wx.getLocalImgData({
                    localId: i,
                    success: function (e) {
                      n.src = e.localData;
                    },
                  });
                }))));
        },
        !0,
      ),
      n.addEventListener(
        "load",
        function (e) {
          var n;
          u ||
            ((n = (e = e.target).tagName),
            "IMG" != n && "VIDEO" != n && "AUDIO" != n && "SOURCE" != n) ||
            ((n = e["wx-id"]) && (T[n] = !1));
        },
        !0,
      ),
      e && (r.wx = r.jWeixin = k),
      k
    );
  function M(n, e, i) {
    r.WeixinJSBridge
      ? WeixinJSBridge.invoke(n, P(e), function (e) {
          A(n, e, i);
        })
      : O(n, i);
  }
  function V(n, i, t) {
    r.WeixinJSBridge
      ? WeixinJSBridge.on(n, function (e) {
          (t && t.trigger && t.trigger(e), A(n, e, i));
        })
      : O(n, t || i);
  }
  function P(e) {
    return (
      ((e = e || {}).appId = y.appId),
      (e.verifyAppId = y.appId),
      (e.verifySignType = "sha1"),
      (e.verifyTimestamp = y.timestamp + ""),
      (e.verifyNonceStr = y.nonceStr),
      (e.verifySignature = y.signature),
      e
    );
  }
  function x(e) {
    return {
      timeStamp: e.timestamp + "",
      nonceStr: e.nonceStr,
      package: e.package,
      paySign: e.paySign,
      signType: e.signType || "SHA1",
    };
  }
  function A(e, n, i) {
    (("openEnterpriseChat" != e && "openBusinessView" !== e) ||
      (n.errCode = n.err_code),
      delete n.err_code,
      delete n.err_desc,
      delete n.err_detail);
    var t = n.errMsg,
      e =
        (t ||
          ((t = n.err_msg),
          delete n.err_msg,
          (t = ((e, n) => {
            var i,
              t = c[e];
            return (
              t && (e = t),
              (t = "ok"),
              n &&
                ((i = n.indexOf(":")),
                ("access denied" !=
                  (t = (t = (t =
                    -1 !=
                    (t =
                      -1 !=
                      (t =
                        "failed" ==
                        (t = "confirm" == (t = n.substring(i + 1)) ? "ok" : t)
                          ? "fail"
                          : t).indexOf("failed_")
                        ? t.substring(7)
                        : t).indexOf("fail_")
                      ? t.substring(5)
                      : t).replace(/_/g, " ")).toLowerCase()) &&
                  "no permission to execute" != t) ||
                  (t = "permission denied"),
                "" ==
                  (t =
                    "config" == e && "function not exist" == t ? "ok" : t)) &&
                (t = "fail"),
              (n = e + ":" + t)
            );
          })(e, t)),
          (n.errMsg = t)),
        (i = i || {})._complete && (i._complete(n), delete i._complete),
        (t = n.errMsg || ""),
        y.debug && !i.isInnerInvoke && alert(JSON.stringify(n)),
        t.indexOf(":"));
    switch (t.substring(e + 1)) {
      case "ok":
        i.success && i.success(n);
        break;
      case "cancel":
        i.cancel && i.cancel(n);
        break;
      default:
        i.fail && i.fail(n);
    }
    i.complete && i.complete(n);
  }
  function C(e) {
    if (e) {
      for (var n = 0, i = e.length; n < i; ++n) {
        var t = e[n],
          t = a[t];
        t && (e[n] = t);
      }
      return e;
    }
  }
  function O(e, n) {
    var i;
    !y.debug ||
      (n && n.isInnerInvoke) ||
      ((i = c[e]) && (e = i),
      n && n._complete && delete n._complete,
      console.log('"' + e + '",', n || ""));
  }
  function B(n) {
    var i;
    o ||
      s ||
      y.debug ||
      f < "6.0.2" ||
      h.systemType < 0 ||
      ((i = new Image()),
      (h.appId = y.appId),
      (h.initTime = g.initEndTime - g.initStartTime),
      (h.preVerifyTime = g.preVerifyEndTime - g.preVerifyStartTime),
      k.getNetworkType({
        isInnerInvoke: !0,
        success: function (e) {
          h.networkType = e.networkType;
          e =
            "https://open.weixin.qq.com/sdk/report?v=" +
            h.version +
            "&o=" +
            h.isPreVerifyOk +
            "&s=" +
            h.systemType +
            "&c=" +
            h.clientVersion +
            "&a=" +
            h.appId +
            "&n=" +
            h.networkType +
            "&i=" +
            h.initTime +
            "&p=" +
            h.preVerifyTime +
            "&u=" +
            h.url +
            "&jsapi_name=" +
            (n ? n.jsApiName : "");
          i.src = e;
        },
      }));
  }
  function L() {
    return new Date().getTime();
  }
  function N(e) {
    (d || p) &&
      (r.WeixinJSBridge
        ? e()
        : n.addEventListener &&
          n.addEventListener("WeixinJSBridgeReady", e, !1));
  }
});
