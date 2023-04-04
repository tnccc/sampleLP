<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue'
import SectionOfHero from '@/components/section/OfHero.vue'
import SectionOfAbout from '@/components/section/OfAbout.vue'
import SectionOfSolution from '@/components/section/OfSolution.vue'
import SectionOfWorks from '@/components/section/OfWorks.vue'
type Student = {
  name: string;
  isScience: boolean;
  english: number;
  math: number;
  science: number;
  japanese: number;
  social: number;
};
// 読み取り専用の型を作成
type StudentReadonly = Readonly<Student>;
const students: StudentReadonly[] = [
  {
    name     : '山田',
    isScience: false,
    english  : 68,
    math     : 81,
    science  : 81,
    japanese : 60,
    social   : 74,
  },
  {
    name     : '中野',
    isScience: true,
    english  : 70,
    math     : 78,
    science  : 82,
    japanese : 57,
    social   : 74,
  },
  {
    name     : '竹田',
    isScience: true,
    english  : 60,
    math     : 76,
    science  : 55,
    japanese : 80,
    social   : 70,
  },
  {
    name     : '金子',
    isScience: true,
    english  : 90,
    math     : 100,
    science  : 96,
    japanese : 10,
    social   : 10,
  },
  {
    name     : '佐久間',
    isScience: false,
    english  : 88,
    math     : 78,
    science  : 81,
    japanese : 97,
    social   : 93,
  },
];

const checkIfQualified = () => {
  const initialValue = 0
}
checkIfQualified()
</script>

<template>
  <GlobalHeader :class="$style.header" />
  <main :class="$style.main">
    <SectionOfHero />
    <SectionOfAbout />
    <SectionOfSolution />
    <SectionOfWorks />
  </main>
</template>

<style lang="scss" module>
.main {
  width : 100%;
}

</style>
