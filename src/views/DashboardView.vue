<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import Header from "@/stories/Header.vue";
import { reactive } from "vue";

interface Data {
  accordion: boolean;
}

const data: Data = reactive({
  accordion: true,
});

function accordionToggle(): void {
  data.accordion = !data.accordion;
}

const router = useRouter();
const isAuth = computed(() => {
  return !!localStorage.getItem("token");
});
onMounted(() => {
  if (!isAuth.value) {
    router.push("/login");
  }
});
</script>

<template>
  <main>
    <Header />
    <div>
      <div>
        <p class="flex items-center gap-2 cursor-pointer">
          <img
            class="w-3 h-2.5"
            src="../assets/icons/back_icon.svg"
          />
          <span
            class="text-[14px] text-center text-[#55637F] leading-[22.4px] font-[600]"
            >Back</span
          >
        </p>
      </div>
      <div class="title flex items-end gap-[12px] mb-[32px]">
        <h1 class="font-[700] text-[36px] leading-[43.2px] text-[#1A1E26]">
          Youtube Shorts
        </h1>
        <p class="mb-[1px] cursor-pointer">
          <img
            src="../assets/icons/title_icon.svg"
            alt="icon"
          />
        </p>
      </div>
      <div class="flex">
        <div class="w-[308px] mr-10">
          <div
            class="card max-w-[308px] p-[24px] rounded-[12px] border border-[#CACFBD] bg-[#F4F9E7] mb-10"
          >
            <div class="card_style">
              <div class="card_style_in">
                <h1
                  class="value text-[24px] leading-[28.8px] text-[#1A1E26] mb-[60px]"
                >
                  <span class="font-[700]">$</span>
                  <span class="font-[700]">218.56</span>
                </h1>
                <div class="flex justify-between items-end">
                  <div class="card_info">
                    <p
                      class="card_number font-[700] text-[#1A1E26] text-[16px] leading-[25.6px] mb-2"
                    >
                      · 3721
                    </p>
                    <p
                      class="card_name font-[500] text-[#55637F] text-[14px] leading-[22.4px]"
                    >
                      Youtube Shorts
                    </p>
                  </div>
                  <div class="card_icon">
                    <img
                      src="../assets/icons/card_icon.png"
                      alt="card"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card_form flex flex-wrap gap-3 mb-10">
            <div class="item item-1">
              <img
                src="../assets/icons/card_plus.svg"
                alt="plus"
              />
              <p>Top Up</p>
            </div>
            <div class="item item-2">
              <img
                src="../assets/icons/card_transfer.svg"
                alt="tranfer"
              />
              <p>Transfer</p>
            </div>
            <div class="item item-2">
              <img
                src="../assets/icons/card_freeze.svg"
                alt="freeze"
              />
              <p>Freeze</p>
            </div>
          </div>
          <div class="card_statics w-full bg-[#F9FAFB] rounded-[12px] mb-10">
            <div class="item">
              <div>
                <img
                  src="../assets/icons/income_icon.svg"
                  alt="icon"
                />
                <span>Income</span>
              </div>
              <p class="bold-text">$ 43 412.22</p>
            </div>
            <div class="item">
              <div>
                <img
                  src="../assets/icons/pending_icon.svg"
                  alt="icon"
                />
                <span>Pending</span>
              </div>
              <p>$ 2 111.63</p>
            </div>
            <div class="item">
              <div>
                <img
                  src="../assets/icons/declined_icon.svg"
                  alt="icon"
                />
                <span>Declined</span>
              </div>
              <p>$ 2 111.63</p>
            </div>
          </div>
          <div class="end">
            <p class="font-[500] text-[14px] text-[#55637F]">
              5$ monthly fee, next charge on January 5th
            </p>
          </div>
        </div>
        <div>
          <div class="flex gap-3 mb-10">
            <div class="rounded-[12px] border border-[#F0F1F5]">
              <div class="info_item border-b border-[#F0F1F5]">
                <div>
                  <h3>Card</h3>
                  <p :class="{ text_block: data.accordion }">
                    3283 2832 3283 0355
                  </p>
                  <p
                    class="w-[262px] h-[26px] rounded-3xl bg-[#F9FAFB] hidden"
                    :class="{ text_none: data.accordion }"
                  ></p>
                </div>
                <div :class="{ text_block: data.accordion }">
                  <img
                    src="../assets/icons/copy_icon.svg"
                    alt="copy"
                  />
                </div>
              </div>
              <div class="info_item">
                <div>
                  <h3>Holder</h3>
                  <p :class="{ text_block: data.accordion }">SEGREY HSY</p>
                  <p
                    class="w-[262px] h-[26px] rounded-3xl bg-[#F9FAFB] hidden"
                    :class="{ text_none: data.accordion }"
                  ></p>
                </div>
                <div :class="{ text_block: data.accordion }">
                  <img
                    src="../assets/icons/copy_icon.svg"
                    alt="copy"
                  />
                </div>
              </div>
            </div>
            <div class="rounded-[12px] border border-[#F0F1F5]">
              <div class="info_item border-b border-[#F0F1F5]">
                <div>
                  <h3>Valid till</h3>
                  <p :class="{ text_block: data.accordion }">11 / 2023</p>
                  <p
                    class="w-[81px] h-[26px] rounded-3xl bg-[#F9FAFB] hidden"
                    :class="{ text_none: data.accordion }"
                  ></p>
                </div>
                <div :class="{ text_block: data.accordion }">
                  <img
                    src="../assets/icons/copy_icon.svg"
                    alt="copy"
                  />
                </div>
              </div>
              <div class="info_item">
                <div>
                  <h3>CVC</h3>
                  <p :class="{ text_block: data.accordion }">231</p>
                  <p
                    class="w-[61px] h-[26px] rounded-3xl bg-[#F9FAFB] hidden"
                    :class="{ text_none: data.accordion }"
                  ></p>
                </div>
                <div :class="{ text_block: data.accordion }">
                  <img
                    src="../assets/icons/copy_icon.svg"
                    alt="copy"
                  />
                </div>
              </div>
            </div>
            <div class="rounded-[12px] border border-[#F0F1F5]">
              <div class="info_item flex-col">
                <div class="flex items-center">
                  <div class="max-w-[262px]">
                    <h3>Billing Address</h3>
                    <p class="mb-[23px]" :class="{ text_block: data.accordion }">
                      1233 W Main Street, Riverhead, NY, 12031, US
                    </p>
                    <p
                      class="w-[262px] h-[51px] rounded-3xl bg-[#F9FAFB] hidden mb-[23px]"
                      :class="{ text_none: data.accordion }"
                    ></p>
                  </div>
                  <div :class="{ text_block: data.accordion }">
                    <img
                      src="../assets/icons/copy_icon.svg"
                      alt="copy"
                    />
                  </div>
                </div>
                <div>
                  <button
                    @click="accordionToggle"
                    class="max-w-[287px] m-auto bg-[#1A1E26] flex py-[10px] px-[91.8px] rounded-xl items-center"
                  >
                    <img
                      :class="{ text_block: data.accordion }"
                      src="../assets/icons/btn_eye_close.svg"
                      alt="Eye"
                    />
                    <img
                      class="hidden"
                      :class="{ text_none: data.accordion }"
                      src="../assets/icons/Eye.svg"
                      alt="Eye"
                    />
                    <span
                      class="text-[#FFFFFF] leading-[22.4px] text-[14px] font-[600] ml-2"
                      >Hide Details</span
                    >
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1
              class="text-[20px] font-[700] leading-[24px] text-[#1A1E26] mb-5"
            >
              Transactions
            </h1>
            <div>
              <ul class="flex items-center gap-6 mb-5">
                <li
                  class="font-[500] text-[14px] text-[#55637F] leading-[22.4px]"
                >
                  All Transactions
                </li>
                <li
                  class="font-[500] text-[14px] text-[#55637F] leading-[22.4px]"
                >
                  Deposits
                </li>
                <li
                  class="font-[500] text-[14px] text-[#55637F] leading-[22.4px]"
                >
                  Spendings
                </li>
              </ul>
            </div>
            <div class="grid gap-3">
              <h5
                class="font-[500] text-[14px] text-[#55637F] leading-[22.4px]"
              >
                3 January
              </h5>
              <ul class="border border-[#F0F1F5] rounded-[12px] p-5">
                <li class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div>
                      <img
                        src="../assets/icons/icon_transaction.svg"
                        alt="icon"
                      />
                    </div>
                    <div>
                      <h3
                        class="font-[700] text-[#1A1E26] text-[16px] leading-[25.6px]"
                      >
                        GMPays
                      </h3>
                      <p
                        class="font-[500] text-[14px] text-[#55637F] leading-[22.4px]"
                      >
                        12:21 AM
                      </p>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <h3
                      class="font-[700] text-[#1A1E26] text-[16px] leading-[25.6px]"
                    >
                      - $ 6 755.79
                    </h3>
                  </div>
                </li>
              </ul>
              <ul class="border border-[#F0F1F5] rounded-[12px] p-5">
                <li class="flex justify-between">
                  <div class="flex gap-3">
                    <div>
                      <img
                        src="../assets/icons/icon_transaction2.svg"
                        alt="icon"
                      />
                    </div>
                    <div>
                      <h3
                        class="font-[600] text-[#1A1E26] text-[16px] leading-[25.6px]"
                      >
                        Booking
                      </h3>
                      <p
                        class="font-[500] text-[14px] text-[#55637F] leading-[22.4px]"
                      >
                        12:21 AM
                      </p>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <h3
                      class="font-[700] text-[#FF4337] text-[16px] leading-[25.6px]"
                    >
                      - $ 211.41
                    </h3>
                    <img
                      class="w-4"
                      src="../assets/icons/minus_wallet.svg"
                      alt="err"
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div class="grid gap-3">
              <h5
                class="font-[500] text-[14px] text-[#55637F] leading-[22.4px]"
              >
                3 January
              </h5>
              <ul class="border border-[#F0F1F5] rounded-[12px] p-5">
                <li class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div>
                      <img
                        src="../assets/icons/icon_transaction3.svg"
                        alt="icon"
                      />
                    </div>
                    <div>
                      <h3
                        class="font-[700] text-[#1A1E26] text-[16px] leading-[25.6px]"
                      >
                        Deposit from USDT Wallet
                      </h3>
                      <p
                        class="font-[500] text-[14px] text-[#55637F] leading-[22.4px]"
                      >
                        12:21 AM
                      </p>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <h3
                      class="font-[700] text-[#19A451] text-[16px] leading-[25.6px]"
                    >
                      + $ 100.79
                    </h3>
                  </div>
                </li>
              </ul>
              <ul class="border border-[#F0F1F5] rounded-[12px] p-5">
                <li class="flex justify-between">
                  <div class="flex gap-3">
                    <div>
                      <img
                        src="../assets/icons/icon_transaction4.svg"
                        alt="icon"
                      />
                    </div>
                    <div>
                      <h3
                        class="font-[600] text-[#1A1E26] text-[16px] leading-[25.6px]"
                      >
                        GMPays
                      </h3>
                      <p
                        class="font-[500] text-[14px] text-[#55637F] leading-[22.4px]"
                      >
                        12:21 AM
                      </p>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <h3
                      class="font-[700] text-[#1A1E26] text-[16px] leading-[25.6px]"
                    >
                      - $ 6 755.79
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.card_form .item {
  padding: 20px;
  border: 1px solid #f0f1f5;
  border-radius: 12px;
  width: 148px;
  cursor: pointer;
}
.card_form .item img {
  width: 20px;
  height: 20px;
  margin-bottom: 15px;
}
.card_form .item p {
  font-weight: 700;
  font-size: 16px;
  line-height: 25.6px;
  color: #1a1e26;
}
.card_statics .item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
}
.card_statics .item div {
  display: flex;
  align-items: center;
}
.card_statics .item div img {
  margin-right: 8px;
  width: 16px;
  height: 16px;
}
.card_statics .item div span {
  font-weight: 500;
  font-size: 14px;
  line-height: 22.4px;
  color: #55637f;
}
.card_statics .item p {
  font-weight: 500;
  font-size: 16px;
  line-height: 25.6px;
  color: #55637f;
}
.card_statics .item .bold-text {
  font-weight: 700;
  color: #1a1e26;
}
.info_item {
  padding: 20px;
  display: flex;
  width: 327px;
  align-items: center;
  justify-content: space-between;
}
.info_item div h3 {
  font-size: 14px;
  line-height: 22.4px;
  color: #55637f;
  font-weight: 500;
  margin-bottom: 8px;
}
.info_item div p {
  font-size: 16px;
  line-height: 25.6px;
  color: #1a1e26;
  font-weight: 600;
}
.info_item div img {
  cursor: pointer;
  width: 16px !important;
  height: 16px !important;
}

.text_block {
  display: none;
}
.text_none {
  display: block !important;
}
</style>
