<template>
    <div>
      <el-card>
        <el-row style="height: 40px" :gutter="20">
          <el-col :span="2">
            <div>
              <i class="el-icon-notebook-2"></i>
              <span style="margin-left:5px">会话管理</span>
            </div>
          </el-col>
          <el-col :span="4">
            <el-select v-model="selectSession" filterable>
              <el-option
                v-for="item in sessionList"
                :key="item.sessionName"
                :value="item.sessionName">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="12">
            <h2 style="text-align: center">{{ selectSession }}</h2>
          </el-col>
          <el-col :span="4">
            <el-input v-model="inputSession" placeholder="请输入会话名"></el-input>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" round @click="insertSession">创建会话</el-button>
          </el-col>
        </el-row>
      </el-card>
      <el-card>
      </el-card>
    </div>
</template>

<script>
export default {
  data () {
    return {
      inputSession: '',
      selectSession: 'l1hy',
      sessionList: [
        {
          sessionID: '0000001',
          sessionName: 'l1hy',
          knapsackCrypto: {
            m: '',
            c: '',
            k: 13169,
            t: 6582,
            publicKeySet: [3708, 7406, 3663, 3588, 7151, 6866, 6281, 1398, 6509, 1859],
            superSet: [3, 10, 21, 51, 112, 226, 460, 927, 1855, 3715],
            MAX: 10
          }
        }
      ]
    };
  },
  methods: {
    insertSession () {
      this.$message.success('创建会话成功');
      this.sessionList.push({
        sessionID: '0000001',
        sessionName: this.inputSession,
        knapsackCrypto: {
          m: '',
          c: '',
          k: 13169,
          t: 6582,
          publicKeySet: [3708, 7406, 3663, 3588, 7151, 6866, 6281, 1398, 6509, 1859],
          superSet: [3, 10, 21, 51, 112, 226, 460, 927, 1855, 3715],
          MAX: 10
        }
      });
      this.selectSession = this.inputSession;
      this.inputSession = '';
    }
  }
};
</script>

<style scoped lang="less">
  .el-row {
    display: flex;
    align-items: center;
  }
</style>
