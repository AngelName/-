import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { AtCountdown, AtCard, AtTabBar } from "taro-ui";
import img from "../../../../assets/image/img.png";

import kingIcon from "../../assets/king.png";
import kingB1Icon from "../../assets/kingb1.png";
import king2Icon from "../../assets/king2.png";
import kingB2Icon from "../../assets/kingb2.png";
import king3Icon from "../../assets/king3.png";
import kingB3Icon from "../../assets/kingb3.png";
import "./index.scss";
import { getUserInfoRankingList } from "@/util/db/user";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: {
        name: "张帅",
        poll: 123
      },
      second: {
        name: "张帅",
        poll: 123
      },
      third: {
        name: "张帅",
        poll: 123
      }
    };
  }
  config = {
    navigationBarTitleText: "美术作品竞赛"
  };

  componentWillReceiveProps(nextProps) {}

  componentWillUnmount() {}

  componentDidShow() {
    getUserInfoRankingList(0, 3).then(res => {
      let { data } = res;
      console.log(res);
      this.setState({
        first: data[0],
        second: data[1],
        third: data[2]
      });
    });

    console.log(this.props);
  }
  goToDetail = data => {
    Taro.navigateTo({ url: `../player/index?id=${data._id}` });
  };
  componentDidHide() {}

  render() {
    let { first, second, third } = this.state;
    console.log(this.state);
    return (
      <View className="index">

        <View
          className="title"
          style="padding-top:10%;background:#ff984d;height:400rpx;"
        >
          {/* header */}
          <View className="card-box" style="display:flex;"
          
          >
            <View className="card"
              onClick={this.goToDetail.bind(this,second)}>
              <Image
                className="king"
                style="width:64rpx;height:64rpx;"
                src={king2Icon}
              ></Image>
              <Image
                src={second.avatarUrl || img}
                style="margin:auto;width:128rpx;height:128rpx;border-radius:50%;display:block;"
              ></Image>
              <Image
                className="bottom"
                style="width:160rpx;height:50rpx;"
                src={kingB2Icon}
              ></Image>
              <View className="text-center name">{second.name}</View>
              <View className="text-center ticket ">{second.poll}票数</View>
              <View className="text-center help">帮他</View>
            </View>
            <View className="card first"
              onClick={this.goToDetail.bind(this,first)}>
              <View className="before"></View>
              <View className="content">
                <Image
                  className="king"
                  style="width:64rpx;height:64rpx;"
                  src={kingIcon}
                ></Image>
                <Image
                  src={first.avatarUrl || img}
                  style="margin:auto;width:128rpx;height:128rpx;border-radius:50%;display:block;"
                ></Image>
                <Image
                  className="bottom"
                  style="width:160rpx;height:50rpx;"
                  src={kingB1Icon}
                ></Image>
                <View className="text-center name">{first.name}</View>
                <View className="text-center ticket ">{first.poll}票数</View>
                <View className="text-center help">帮他</View>
              </View>
              <View className="after"></View>
            </View>
            <View className="card"
              onClick={this.goToDetail.bind(this,third)}>
              <Image
                className="king"
                style="width:64rpx;height:64rpx;"
                src={king3Icon}
              ></Image>
              <Image
                src={third.avatarUrl || img}
                style="margin:auto;width:128rpx;height:128rpx;border-radius:50%;display:block;"
              ></Image>
              <Image
                className="bottom"
                style="width:160rpx;height:50rpx;"
                src={kingB3Icon}
              ></Image>
              <View className="text-center name">{third.name}</View>
              <View className="text-center ticket ">{third.poll}票数</View>
              <View className="text-center help">帮他</View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
